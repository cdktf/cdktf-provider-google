# `cloudSchedulerJob` Submodule <a name="`cloudSchedulerJob` Submodule" id="@cdktf/provider-google.cloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSchedulerJob <a name="CloudSchedulerJob" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJob;

CloudSchedulerJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appEngineHttpTarget(CloudSchedulerJobAppEngineHttpTarget)
//  .attemptDeadline(java.lang.String)
//  .description(java.lang.String)
//  .httpTarget(CloudSchedulerJobHttpTarget)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .project(java.lang.String)
//  .pubsubTarget(CloudSchedulerJobPubsubTarget)
//  .region(java.lang.String)
//  .retryConfig(CloudSchedulerJobRetryConfig)
//  .schedule(java.lang.String)
//  .timeouts(CloudSchedulerJobTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#name CloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.appEngineHttpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#app_engine_http_target CloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.attemptDeadline"></a>

- *Type:* java.lang.String

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#attempt_deadline CloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#description CloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#http_target CloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#paused CloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.pubsubTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#pubsub_target CloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#region CloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#retry_config CloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#schedule CloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#timeouts CloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#time_zone CloudSchedulerJob#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget">putAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget">putPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget">resetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline">resetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget">resetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineHttpTarget` <a name="putAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget"></a>

```java
public void putAppEngineHttpTarget(CloudSchedulerJobAppEngineHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget"></a>

```java
public void putHttpTarget(CloudSchedulerJobHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `putPubsubTarget` <a name="putPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget"></a>

```java
public void putPubsubTarget(CloudSchedulerJobPubsubTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig"></a>

```java
public void putRetryConfig(CloudSchedulerJobRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts"></a>

```java
public void putTimeouts(CloudSchedulerJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---

##### `resetAppEngineHttpTarget` <a name="resetAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget"></a>

```java
public void resetAppEngineHttpTarget()
```

##### `resetAttemptDeadline` <a name="resetAttemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline"></a>

```java
public void resetAttemptDeadline()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget"></a>

```java
public void resetHttpTarget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId"></a>

```java
public void resetId()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubTarget` <a name="resetPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget"></a>

```java
public void resetPubsubTarget()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig"></a>

```java
public void resetRetryConfig()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJob;

CloudSchedulerJob.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJob;

CloudSchedulerJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJob;

CloudSchedulerJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJob;

CloudSchedulerJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudSchedulerJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudSchedulerJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput">appEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput">attemptDeadlineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput">pubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appEngineHttpTarget`<sup>Required</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget"></a>

```java
public CloudSchedulerJobAppEngineHttpTargetOutputReference getAppEngineHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget"></a>

```java
public CloudSchedulerJobHttpTargetOutputReference getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a>

---

##### `pubsubTarget`<sup>Required</sup> <a name="pubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget"></a>

```java
public CloudSchedulerJobPubsubTargetOutputReference getPubsubTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig"></a>

```java
public CloudSchedulerJobRetryConfigOutputReference getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts"></a>

```java
public CloudSchedulerJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a>

---

##### `appEngineHttpTargetInput`<sup>Optional</sup> <a name="appEngineHttpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```java
public CloudSchedulerJobAppEngineHttpTarget getAppEngineHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `attemptDeadlineInput`<sup>Optional</sup> <a name="attemptDeadlineInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput"></a>

```java
public java.lang.String getAttemptDeadlineInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput"></a>

```java
public CloudSchedulerJobHttpTarget getHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubTargetInput`<sup>Optional</sup> <a name="pubsubTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput"></a>

```java
public CloudSchedulerJobPubsubTarget getPubsubTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput"></a>

```java
public CloudSchedulerJobRetryConfig getRetryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `attemptDeadline`<sup>Required</sup> <a name="attemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline"></a>

```java
public java.lang.String getAttemptDeadline();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSchedulerJobAppEngineHttpTarget <a name="CloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobAppEngineHttpTarget;

CloudSchedulerJobAppEngineHttpTarget.builder()
    .relativeUri(java.lang.String)
//  .appEngineRouting(CloudSchedulerJobAppEngineHttpTargetAppEngineRouting)
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri">relativeUri</a></code> | <code>java.lang.String</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body">body</a></code> | <code>java.lang.String</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Which HTTP method to use for the request. |

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```java
public java.lang.String getRelativeUri();
```

- *Type:* java.lang.String

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#relative_uri CloudSchedulerJob#relative_uri}

---

##### `appEngineRouting`<sup>Optional</sup> <a name="appEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```java
public CloudSchedulerJobAppEngineHttpTargetAppEngineRouting getAppEngineRouting();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#app_engine_routing CloudSchedulerJob#app_engine_routing}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

### CloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;

CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.builder()
//  .instance(java.lang.String)
//  .service(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">instance</a></code> | <code>java.lang.String</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">service</a></code> | <code>java.lang.String</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">version</a></code> | <code>java.lang.String</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#instance CloudSchedulerJob#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#service CloudSchedulerJob#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#version CloudSchedulerJob#version}

---

### CloudSchedulerJobConfig <a name="CloudSchedulerJobConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobConfig;

CloudSchedulerJobConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appEngineHttpTarget(CloudSchedulerJobAppEngineHttpTarget)
//  .attemptDeadline(java.lang.String)
//  .description(java.lang.String)
//  .httpTarget(CloudSchedulerJobHttpTarget)
//  .id(java.lang.String)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .project(java.lang.String)
//  .pubsubTarget(CloudSchedulerJobPubsubTarget)
//  .region(java.lang.String)
//  .retryConfig(CloudSchedulerJobRetryConfig)
//  .schedule(java.lang.String)
//  .timeouts(CloudSchedulerJobTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline">attemptDeadline</a></code> | <code>java.lang.String</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#name CloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```java
public CloudSchedulerJobAppEngineHttpTarget getAppEngineHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#app_engine_http_target CloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline"></a>

```java
public java.lang.String getAttemptDeadline();
```

- *Type:* java.lang.String

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#attempt_deadline CloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#description CloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget"></a>

```java
public CloudSchedulerJobHttpTarget getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#http_target CloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#paused CloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget"></a>

```java
public CloudSchedulerJobPubsubTarget getPubsubTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#pubsub_target CloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#region CloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig"></a>

```java
public CloudSchedulerJobRetryConfig getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#retry_config CloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#schedule CloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts"></a>

```java
public CloudSchedulerJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#timeouts CloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#time_zone CloudSchedulerJob#time_zone}

---

### CloudSchedulerJobHttpTarget <a name="CloudSchedulerJobHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTarget;

CloudSchedulerJobHttpTarget.builder()
    .uri(java.lang.String)
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
//  .oauthToken(CloudSchedulerJobHttpTargetOauthToken)
//  .oidcToken(CloudSchedulerJobHttpTargetOidcToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri">uri</a></code> | <code>java.lang.String</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body">body</a></code> | <code>java.lang.String</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#uri CloudSchedulerJob#uri}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken"></a>

```java
public CloudSchedulerJobHttpTargetOauthToken getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#oauth_token CloudSchedulerJob#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken"></a>

```java
public CloudSchedulerJobHttpTargetOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#oidc_token CloudSchedulerJob#oidc_token}

---

### CloudSchedulerJobHttpTargetOauthToken <a name="CloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTargetOauthToken;

CloudSchedulerJobHttpTargetOauthToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope">scope</a></code> | <code>java.lang.String</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#scope CloudSchedulerJob#scope}

---

### CloudSchedulerJobHttpTargetOidcToken <a name="CloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTargetOidcToken;

CloudSchedulerJobHttpTargetOidcToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#audience CloudSchedulerJob#audience}

---

### CloudSchedulerJobPubsubTarget <a name="CloudSchedulerJobPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobPubsubTarget;

CloudSchedulerJobPubsubTarget.builder()
    .topicName(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName">topicName</a></code> | <code>java.lang.String</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data">data</a></code> | <code>java.lang.String</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#topic_name CloudSchedulerJob#topic_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#attributes CloudSchedulerJob#attributes}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#data CloudSchedulerJob#data}

---

### CloudSchedulerJobRetryConfig <a name="CloudSchedulerJobRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobRetryConfig;

CloudSchedulerJobRetryConfig.builder()
//  .maxBackoffDuration(java.lang.String)
//  .maxDoublings(java.lang.Number)
//  .maxRetryDuration(java.lang.String)
//  .minBackoffDuration(java.lang.String)
//  .retryCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration">minBackoffDuration</a></code> | <code>java.lang.String</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount">retryCount</a></code> | <code>java.lang.Number</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `maxBackoffDuration`<sup>Optional</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```java
public java.lang.String getMaxBackoffDuration();
```

- *Type:* java.lang.String

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#max_backoff_duration CloudSchedulerJob#max_backoff_duration}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#max_doublings CloudSchedulerJob#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#max_retry_duration CloudSchedulerJob#max_retry_duration}

---

##### `minBackoffDuration`<sup>Optional</sup> <a name="minBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```java
public java.lang.String getMinBackoffDuration();
```

- *Type:* java.lang.String

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#min_backoff_duration CloudSchedulerJob#min_backoff_duration}

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount"></a>

```java
public java.lang.Number getRetryCount();
```

- *Type:* java.lang.Number

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#retry_count CloudSchedulerJob#retry_count}

---

### CloudSchedulerJobTimeouts <a name="CloudSchedulerJobTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobTimeouts;

CloudSchedulerJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#create CloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#delete CloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#update CloudSchedulerJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#create CloudSchedulerJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#delete CloudSchedulerJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_scheduler_job#update CloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference;

new CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobAppEngineHttpTargetAppEngineRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### CloudSchedulerJobAppEngineHttpTargetOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobAppEngineHttpTargetOutputReference;

new CloudSchedulerJobAppEngineHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">putAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">resetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppEngineRouting` <a name="putAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```java
public void putAppEngineRouting(CloudSchedulerJobAppEngineHttpTargetAppEngineRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `resetAppEngineRouting` <a name="resetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```java
public void resetAppEngineRouting()
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">appEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">relativeUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">relativeUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appEngineRouting`<sup>Required</sup> <a name="appEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```java
public CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference getAppEngineRouting();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `appEngineRoutingInput`<sup>Optional</sup> <a name="appEngineRoutingInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```java
public CloudSchedulerJobAppEngineHttpTargetAppEngineRouting getAppEngineRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `relativeUriInput`<sup>Optional</sup> <a name="relativeUriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```java
public java.lang.String getRelativeUriInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```java
public java.lang.String getRelativeUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobAppEngineHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---


### CloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="CloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTargetOauthTokenOutputReference;

new CloudSchedulerJobHttpTargetOauthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobHttpTargetOauthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---


### CloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="CloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTargetOidcTokenOutputReference;

new CloudSchedulerJobHttpTargetOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobHttpTargetOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---


### CloudSchedulerJobHttpTargetOutputReference <a name="CloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobHttpTargetOutputReference;

new CloudSchedulerJobHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```java
public void putOauthToken(CloudSchedulerJobHttpTargetOauthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```java
public void putOidcToken(CloudSchedulerJobHttpTargetOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```java
public void resetOauthToken()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```java
public CloudSchedulerJobHttpTargetOauthTokenOutputReference getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```java
public CloudSchedulerJobHttpTargetOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```java
public CloudSchedulerJobHttpTargetOauthToken getOauthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```java
public CloudSchedulerJobHttpTargetOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---


### CloudSchedulerJobPubsubTargetOutputReference <a name="CloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobPubsubTargetOutputReference;

new CloudSchedulerJobPubsubTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">topicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName">topicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```java
public java.lang.String getTopicNameInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```java
public java.lang.String getTopicName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobPubsubTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---


### CloudSchedulerJobRetryConfigOutputReference <a name="CloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobRetryConfigOutputReference;

new CloudSchedulerJobRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">resetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">resetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackoffDuration` <a name="resetMaxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```java
public void resetMaxBackoffDuration()
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```java
public void resetMaxDoublings()
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```java
public void resetMaxRetryDuration()
```

##### `resetMinBackoffDuration` <a name="resetMinBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```java
public void resetMinBackoffDuration()
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```java
public void resetRetryCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">maxBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">minBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">minBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount">retryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBackoffDurationInput`<sup>Optional</sup> <a name="maxBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```java
public java.lang.String getMaxBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```java
public java.lang.Number getMaxDoublingsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```java
public java.lang.String getMaxRetryDurationInput();
```

- *Type:* java.lang.String

---

##### `minBackoffDurationInput`<sup>Optional</sup> <a name="minBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```java
public java.lang.String getMinBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```java
public java.lang.Number getRetryCountInput();
```

- *Type:* java.lang.Number

---

##### `maxBackoffDuration`<sup>Required</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```java
public java.lang.String getMaxBackoffDuration();
```

- *Type:* java.lang.String

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

---

##### `minBackoffDuration`<sup>Required</sup> <a name="minBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```java
public java.lang.String getMinBackoffDuration();
```

- *Type:* java.lang.String

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```java
public java.lang.Number getRetryCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```java
public CloudSchedulerJobRetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---


### CloudSchedulerJobTimeoutsOutputReference <a name="CloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_scheduler_job.CloudSchedulerJobTimeoutsOutputReference;

new CloudSchedulerJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---



