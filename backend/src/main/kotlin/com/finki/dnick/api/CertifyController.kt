package com.finki.dnick.api

import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.service.CertificationService
import com.finki.dnick.service.DownloadLinkService
import com.finki.dnick.util.ExportPdfService
import com.finki.dnick.util.MapperService
import org.apache.commons.io.IOUtils
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*
import java.io.ByteArrayInputStream
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping("/api/certify")
@CrossOrigin(origins = ["*"])
class CertifyController(
    val certificationService: CertificationService,
    val mapperService: MapperService,
    val exportPdfService: ExportPdfService,
    val downloadLinkService: DownloadLinkService,
) {

    @GetMapping
    fun getAllCertifications(authentication: Authentication) = certificationService.getAll(authentication.name)

    @PutMapping("/{id}")
    fun startCertification(@PathVariable id: Long): ResponseEntity<out Response> {
        val result = certificationService.start(id)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @GetMapping("/active")
    fun getCertification(): ResponseEntity<out Response> {
        val result = certificationService.getActiveCertification()
        return mapperService.mapResponseToResponseEntity(result)
    }

    @PostMapping("/submit")
    fun submitCertification(@RequestBody sourceCodes: List<String>): ResponseEntity<out Response> {
        val result = certificationService.submit(sourceCodes)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @GetMapping("/completed")
    fun getCompleted() = certificationService.getCompleted()

    @GetMapping("/download")
    fun downloadReceipt(@RequestParam token: String, response: HttpServletResponse) {
        val data = downloadLinkService.getDataFromToken(token)
        if (data.size != 2) {
            response.status = 404
        } else {
            val exportedData: ByteArrayInputStream? = exportPdfService.exportReceiptPdf("certificate", data)
            response.contentType = "application/octet-stream"
            response.setHeader("Content-Disposition", "attachment; filename=certificate.pdf")
            IOUtils.copy(exportedData, response.outputStream)
        }
    }
}
