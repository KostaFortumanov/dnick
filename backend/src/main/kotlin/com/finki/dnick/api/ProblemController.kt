package com.finki.dnick.api

import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.service.ProblemService
import com.finki.dnick.service.code_execution.CodeExecutionService
import com.finki.dnick.util.MapperService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/problem")
@CrossOrigin(origins = ["*"])
class ProblemController(
    val problemService: ProblemService,
    val codeExecutionService: CodeExecutionService,
    val mapperService: MapperService,
) {

    @GetMapping("/{id}")
    fun getProblem(@PathVariable id: Long): ResponseEntity<out Response> {
        val result = problemService.getProblem(id);
        return mapperService.mapResponseToResponseEntity(result)
    }

    @PostMapping("/submit/{id}")
    fun submitProblem(@PathVariable id: Long, @RequestBody sourceCode: String) =
        codeExecutionService.createSubmission(id, sourceCode)
}
