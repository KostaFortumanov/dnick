package com.finki.dnick.service.code_execution

import com.finki.dnick.api.domain.response.TestCaseResultResponse
import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.repository.TestCaseRepository
import org.apache.http.HttpResponse
import org.apache.http.client.HttpClient
import org.apache.http.client.methods.HttpPost
import org.apache.http.entity.StringEntity
import org.apache.http.impl.client.HttpClientBuilder
import org.json.JSONException
import org.json.JSONObject
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import java.io.BufferedReader
import java.io.InputStream
import java.io.InputStreamReader
import java.nio.charset.Charset
import java.nio.charset.StandardCharsets


@Service
class CodeExecutionService(
    val testCaseRepository: TestCaseRepository,
    val userRepository: AppUserRepository,
) {

    fun createSubmission(id: Long, sourceCode: String): List<TestCaseResultResponse> {
        val testCases = testCaseRepository.findAllByProblemId(id)
        val results: MutableList<TestCaseResultResponse> = mutableListOf()
        for (testCase in testCases) {
            val request =
                JudgeRequest(source_code = sourceCode, stdin = testCase.input, expected_output = testCase.expected)

            try {
                val client: HttpClient = HttpClientBuilder.create().build()
                val post = HttpPost("http://judge:2358/submissions/?wait=true")
                val postingString = StringEntity(JSONObject(request).toString())
                post.entity = postingString
                post.setHeader("Content-type", "application/json")
                val response: HttpResponse = client.execute(post)
                val `in`: InputStream = response.entity.content
                val textBuilder = StringBuilder()
                BufferedReader(InputStreamReader(`in`, Charset.forName(StandardCharsets.UTF_8.name()))).use { reader ->
                    var c: Int
                    while (reader.read().also { c = it } != -1) {
                        textBuilder.append(c.toChar())
                    }
                }
                post.releaseConnection()
                val jsonObject = JSONObject(textBuilder.toString())
                try {
                    val output = jsonObject.getString("stdout")
                    val description = jsonObject.getJSONObject("status").getString("description")
                    results.add(
                        TestCaseResultResponse(
                            testCase.input,
                            testCase.expected,
                            output,
                            passed = description == "Accepted"
                        )
                    )
                } catch (e: JSONException) {
                    val description = jsonObject.getJSONObject("status").getString("description")
                    results.add(
                        TestCaseResultResponse(
                            testCase.input,
                            testCase.expected,
                            description
                        )
                    )
                }
            } catch (e: Exception) {
                println(e.message)
            }
        }

        if(results.count { it.passed } == testCases.size ) {
            val user = userRepository.findByUsername(SecurityContextHolder.getContext().authentication.name)!!
            user.finishedProblems.add(id)
            userRepository.save(user)
        }

        return results
    }
}
