package com.finki.dnick.scheduler

import org.springframework.scheduling.TaskScheduler
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.support.CronTrigger
import org.springframework.stereotype.Service
import java.util.*
import java.util.concurrent.ScheduledFuture

@Service
@EnableScheduling
class TaskSchedulingService(val taskScheduler: TaskScheduler) {

    var jobsMap: MutableMap<String, ScheduledFuture<*>?> = HashMap()

    fun scheduleATask(jobId: String, tasklet: Runnable, cronExpression: String) {
        println("Scheduling task with job id: $jobId and cron expression: $cronExpression")
        val scheduledTask = taskScheduler.schedule(
            tasklet,
            CronTrigger(cronExpression, TimeZone.getTimeZone(TimeZone.getDefault().id))
        )
        jobsMap[jobId] = scheduledTask
    }

    fun removeScheduledTask(jobId: String) {
        val scheduledTask = jobsMap[jobId]
        if (scheduledTask != null) {
            scheduledTask.cancel(true)
            jobsMap[jobId] = null
        }
    }
}
