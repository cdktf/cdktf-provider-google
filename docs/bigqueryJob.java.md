# `bigqueryJob` Submodule <a name="`bigqueryJob` Submodule" id="@cdktf/provider-google.bigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryJob <a name="BigqueryJob" id="@cdktf/provider-google.bigqueryJob.BigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJob;

BigqueryJob.Builder.create(Construct scope, java.lang.String id)
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
    .jobId(java.lang.String)
//  .copy(BigqueryJobCopy)
//  .extract(BigqueryJobExtract)
//  .id(java.lang.String)
//  .jobTimeoutMs(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .load(BigqueryJobLoad)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .query(BigqueryJobQuery)
//  .timeouts(BigqueryJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#job_id BigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.copy"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#copy BigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.extract"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#extract BigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTimeoutMs`<sup>Optional</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobTimeoutMs"></a>

- *Type:* java.lang.String

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#labels BigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.load"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#load BigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#location BigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project BigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#timeouts BigqueryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy">putCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad">putLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy">resetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs">resetJobTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad">resetLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCopy` <a name="putCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy"></a>

```java
public void putCopy(BigqueryJobCopy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `putExtract` <a name="putExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract"></a>

```java
public void putExtract(BigqueryJobExtract value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `putLoad` <a name="putLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad"></a>

```java
public void putLoad(BigqueryJobLoad value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery"></a>

```java
public void putQuery(BigqueryJobQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts"></a>

```java
public void putTimeouts(BigqueryJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---

##### `resetCopy` <a name="resetCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy"></a>

```java
public void resetCopy()
```

##### `resetExtract` <a name="resetExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract"></a>

```java
public void resetExtract()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId"></a>

```java
public void resetId()
```

##### `resetJobTimeoutMs` <a name="resetJobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs"></a>

```java
public void resetJobTimeoutMs()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoad` <a name="resetLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad"></a>

```java
public void resetLoad()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJob;

BigqueryJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJob;

BigqueryJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJob;

BigqueryJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJob;

BigqueryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType">jobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput">copyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput">extractInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput">jobTimeoutMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput">loadInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy"></a>

```java
public BigqueryJobCopyOutputReference getCopy();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `extract`<sup>Required</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract"></a>

```java
public BigqueryJobExtractOutputReference getExtract();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a>

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load"></a>

```java
public BigqueryJobLoadOutputReference getLoad();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query"></a>

```java
public BigqueryJobQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status"></a>

```java
public BigqueryJobStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts"></a>

```java
public BigqueryJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a>

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

---

##### `copyInput`<sup>Optional</sup> <a name="copyInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput"></a>

```java
public BigqueryJobCopy getCopyInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput"></a>

```java
public BigqueryJobExtract getExtractInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobTimeoutMsInput`<sup>Optional</sup> <a name="jobTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput"></a>

```java
public java.lang.String getJobTimeoutMsInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadInput`<sup>Optional</sup> <a name="loadInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput"></a>

```java
public BigqueryJobLoad getLoadInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput"></a>

```java
public BigqueryJobQuery getQueryInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobTimeoutMs`<sup>Required</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs"></a>

```java
public java.lang.String getJobTimeoutMs();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryJobConfig <a name="BigqueryJobConfig" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobConfig;

BigqueryJobConfig.builder()
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
    .jobId(java.lang.String)
//  .copy(BigqueryJobCopy)
//  .extract(BigqueryJobExtract)
//  .id(java.lang.String)
//  .jobTimeoutMs(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .load(BigqueryJobLoad)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .query(BigqueryJobQuery)
//  .timeouts(BigqueryJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs">jobTimeoutMs</a></code> | <code>java.lang.String</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#job_id BigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy"></a>

```java
public BigqueryJobCopy getCopy();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#copy BigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract"></a>

```java
public BigqueryJobExtract getExtract();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#extract BigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTimeoutMs`<sup>Optional</sup> <a name="jobTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs"></a>

```java
public java.lang.String getJobTimeoutMs();
```

- *Type:* java.lang.String

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#labels BigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load"></a>

```java
public BigqueryJobLoad getLoad();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#load BigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#location BigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project BigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query"></a>

```java
public BigqueryJobQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts"></a>

```java
public BigqueryJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#timeouts BigqueryJob#timeouts}

---

### BigqueryJobCopy <a name="BigqueryJobCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopy;

BigqueryJobCopy.builder()
    .sourceTables(IResolvable)
    .sourceTables(java.util.List<BigqueryJobCopySourceTables>)
//  .createDisposition(java.lang.String)
//  .destinationEncryptionConfiguration(BigqueryJobCopyDestinationEncryptionConfiguration)
//  .destinationTable(BigqueryJobCopyDestinationTable)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables">sourceTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>></code> | source_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables"></a>

```java
public java.lang.Object getSourceTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>>

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#source_tables BigqueryJob#source_tables}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobCopyDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable"></a>

```java
public BigqueryJobCopyDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobCopyDestinationEncryptionConfiguration <a name="BigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopyDestinationEncryptionConfiguration;

BigqueryJobCopyDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobCopyDestinationTable <a name="BigqueryJobCopyDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopyDestinationTable;

BigqueryJobCopyDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobCopySourceTables <a name="BigqueryJobCopySourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopySourceTables;

BigqueryJobCopySourceTables.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtract <a name="BigqueryJobExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtract;

BigqueryJobExtract.builder()
    .destinationUris(java.util.List<java.lang.String>)
//  .compression(java.lang.String)
//  .destinationFormat(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .printHeader(java.lang.Boolean)
//  .printHeader(IResolvable)
//  .sourceModel(BigqueryJobExtractSourceModel)
//  .sourceTable(BigqueryJobExtractSourceTable)
//  .useAvroLogicalTypes(java.lang.Boolean)
//  .useAvroLogicalTypes(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris">destinationUris</a></code> | <code>java.util.List<java.lang.String></code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression">compression</a></code> | <code>java.lang.String</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat">destinationFormat</a></code> | <code>java.lang.String</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader">printHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris"></a>

```java
public java.util.List<java.lang.String> getDestinationUris();
```

- *Type:* java.util.List<java.lang.String>

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_uris BigqueryJob#destination_uris}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#compression BigqueryJob#compression}

---

##### `destinationFormat`<sup>Optional</sup> <a name="destinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat"></a>

```java
public java.lang.String getDestinationFormat();
```

- *Type:* java.lang.String

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_format BigqueryJob#destination_format}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `printHeader`<sup>Optional</sup> <a name="printHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader"></a>

```java
public java.lang.Object getPrintHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#print_header BigqueryJob#print_header}

---

##### `sourceModel`<sup>Optional</sup> <a name="sourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel"></a>

```java
public BigqueryJobExtractSourceModel getSourceModel();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#source_model BigqueryJob#source_model}

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable"></a>

```java
public BigqueryJobExtractSourceTable getSourceTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#source_table BigqueryJob#source_table}

---

##### `useAvroLogicalTypes`<sup>Optional</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes"></a>

```java
public java.lang.Object getUseAvroLogicalTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#use_avro_logical_types BigqueryJob#use_avro_logical_types}

---

### BigqueryJobExtractSourceModel <a name="BigqueryJobExtractSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtractSourceModel;

BigqueryJobExtractSourceModel.builder()
    .datasetId(java.lang.String)
    .modelId(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this model. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#model_id BigqueryJob#model_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtractSourceTable <a name="BigqueryJobExtractSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtractSourceTable;

BigqueryJobExtractSourceTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoad <a name="BigqueryJobLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoad;

BigqueryJobLoad.builder()
    .destinationTable(BigqueryJobLoadDestinationTable)
    .sourceUris(java.util.List<java.lang.String>)
//  .allowJaggedRows(java.lang.Boolean)
//  .allowJaggedRows(IResolvable)
//  .allowQuotedNewlines(java.lang.Boolean)
//  .allowQuotedNewlines(IResolvable)
//  .autodetect(java.lang.Boolean)
//  .autodetect(IResolvable)
//  .createDisposition(java.lang.String)
//  .destinationEncryptionConfiguration(BigqueryJobLoadDestinationEncryptionConfiguration)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .ignoreUnknownValues(java.lang.Boolean)
//  .ignoreUnknownValues(IResolvable)
//  .jsonExtension(java.lang.String)
//  .maxBadRecords(java.lang.Number)
//  .nullMarker(java.lang.String)
//  .parquetOptions(BigqueryJobLoadParquetOptions)
//  .projectionFields(java.util.List<java.lang.String>)
//  .quote(java.lang.String)
//  .schemaUpdateOptions(java.util.List<java.lang.String>)
//  .skipLeadingRows(java.lang.Number)
//  .sourceFormat(java.lang.String)
//  .timePartitioning(BigqueryJobLoadTimePartitioning)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris">sourceUris</a></code> | <code>java.util.List<java.lang.String></code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows">allowJaggedRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect">autodetect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding">encoding</a></code> | <code>java.lang.String</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension">jsonExtension</a></code> | <code>java.lang.String</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords">maxBadRecords</a></code> | <code>java.lang.Number</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker">nullMarker</a></code> | <code>java.lang.String</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields">projectionFields</a></code> | <code>java.util.List<java.lang.String></code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote">quote</a></code> | <code>java.lang.String</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows">skipLeadingRows</a></code> | <code>java.lang.Number</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable"></a>

```java
public BigqueryJobLoadDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris"></a>

```java
public java.util.List<java.lang.String> getSourceUris();
```

- *Type:* java.util.List<java.lang.String>

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#source_uris BigqueryJob#source_uris}

---

##### `allowJaggedRows`<sup>Optional</sup> <a name="allowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows"></a>

```java
public java.lang.Object getAllowJaggedRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#allow_jagged_rows BigqueryJob#allow_jagged_rows}

---

##### `allowQuotedNewlines`<sup>Optional</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines"></a>

```java
public java.lang.Object getAllowQuotedNewlines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}

---

##### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect"></a>

```java
public java.lang.Object getAutodetect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#autodetect BigqueryJob#autodetect}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobLoadDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#encoding BigqueryJob#encoding}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `ignoreUnknownValues`<sup>Optional</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues"></a>

```java
public java.lang.Object getIgnoreUnknownValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#ignore_unknown_values BigqueryJob#ignore_unknown_values}

---

##### `jsonExtension`<sup>Optional</sup> <a name="jsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension"></a>

```java
public java.lang.String getJsonExtension();
```

- *Type:* java.lang.String

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#json_extension BigqueryJob#json_extension}

---

##### `maxBadRecords`<sup>Optional</sup> <a name="maxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords"></a>

```java
public java.lang.Number getMaxBadRecords();
```

- *Type:* java.lang.Number

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#max_bad_records BigqueryJob#max_bad_records}

---

##### `nullMarker`<sup>Optional</sup> <a name="nullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker"></a>

```java
public java.lang.String getNullMarker();
```

- *Type:* java.lang.String

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#null_marker BigqueryJob#null_marker}

---

##### `parquetOptions`<sup>Optional</sup> <a name="parquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions"></a>

```java
public BigqueryJobLoadParquetOptions getParquetOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#parquet_options BigqueryJob#parquet_options}

---

##### `projectionFields`<sup>Optional</sup> <a name="projectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields"></a>

```java
public java.util.List<java.lang.String> getProjectionFields();
```

- *Type:* java.util.List<java.lang.String>

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#projection_fields BigqueryJob#projection_fields}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote"></a>

```java
public java.lang.String getQuote();
```

- *Type:* java.lang.String

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#quote BigqueryJob#quote}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `skipLeadingRows`<sup>Optional</sup> <a name="skipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows"></a>

```java
public java.lang.Number getSkipLeadingRows();
```

- *Type:* java.lang.Number

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#skip_leading_rows BigqueryJob#skip_leading_rows}

---

##### `sourceFormat`<sup>Optional</sup> <a name="sourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#source_format BigqueryJob#source_format}

---

##### `timePartitioning`<sup>Optional</sup> <a name="timePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning"></a>

```java
public BigqueryJobLoadTimePartitioning getTimePartitioning();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#time_partitioning BigqueryJob#time_partitioning}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobLoadDestinationEncryptionConfiguration <a name="BigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadDestinationEncryptionConfiguration;

BigqueryJobLoadDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobLoadDestinationTable <a name="BigqueryJobLoadDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadDestinationTable;

BigqueryJobLoadDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoadParquetOptions <a name="BigqueryJobLoadParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadParquetOptions;

BigqueryJobLoadParquetOptions.builder()
//  .enableListInference(java.lang.Boolean)
//  .enableListInference(IResolvable)
//  .enumAsString(java.lang.Boolean)
//  .enumAsString(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference">enableListInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString">enumAsString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enableListInference`<sup>Optional</sup> <a name="enableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference"></a>

```java
public java.lang.Object getEnableListInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#enable_list_inference BigqueryJob#enable_list_inference}

---

##### `enumAsString`<sup>Optional</sup> <a name="enumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString"></a>

```java
public java.lang.Object getEnumAsString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#enum_as_string BigqueryJob#enum_as_string}

---

### BigqueryJobLoadTimePartitioning <a name="BigqueryJobLoadTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadTimePartitioning;

BigqueryJobLoadTimePartitioning.builder()
    .type(java.lang.String)
//  .expirationMs(java.lang.String)
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type">type</a></code> | <code>java.lang.String</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field">field</a></code> | <code>java.lang.String</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#type BigqueryJob#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#expiration_ms BigqueryJob#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#field BigqueryJob#field}

---

### BigqueryJobQuery <a name="BigqueryJobQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQuery;

BigqueryJobQuery.builder()
    .query(java.lang.String)
//  .allowLargeResults(java.lang.Boolean)
//  .allowLargeResults(IResolvable)
//  .createDisposition(java.lang.String)
//  .defaultDataset(BigqueryJobQueryDefaultDataset)
//  .destinationEncryptionConfiguration(BigqueryJobQueryDestinationEncryptionConfiguration)
//  .destinationTable(BigqueryJobQueryDestinationTable)
//  .flattenResults(java.lang.Boolean)
//  .flattenResults(IResolvable)
//  .maximumBillingTier(java.lang.Number)
//  .maximumBytesBilled(java.lang.String)
//  .parameterMode(java.lang.String)
//  .priority(java.lang.String)
//  .schemaUpdateOptions(java.util.List<java.lang.String>)
//  .scriptOptions(BigqueryJobQueryScriptOptions)
//  .useLegacySql(java.lang.Boolean)
//  .useLegacySql(IResolvable)
//  .useQueryCache(java.lang.Boolean)
//  .useQueryCache(IResolvable)
//  .userDefinedFunctionResources(IResolvable)
//  .userDefinedFunctionResources(java.util.List<BigqueryJobQueryUserDefinedFunctionResources>)
//  .writeDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query">query</a></code> | <code>java.lang.String</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults">allowLargeResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults">flattenResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier">maximumBillingTier</a></code> | <code>java.lang.Number</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>java.lang.String</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority">priority</a></code> | <code>java.lang.String</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql">useLegacySql</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache">useQueryCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>></code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `allowLargeResults`<sup>Optional</sup> <a name="allowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults"></a>

```java
public java.lang.Object getAllowLargeResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#allow_large_results BigqueryJob#allow_large_results}

---

##### `createDisposition`<sup>Optional</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `defaultDataset`<sup>Optional</sup> <a name="defaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset"></a>

```java
public BigqueryJobQueryDefaultDataset getDefaultDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#default_dataset BigqueryJob#default_dataset}

---

##### `destinationEncryptionConfiguration`<sup>Optional</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobQueryDestinationEncryptionConfiguration getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable"></a>

```java
public BigqueryJobQueryDestinationTable getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `flattenResults`<sup>Optional</sup> <a name="flattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults"></a>

```java
public java.lang.Object getFlattenResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#flatten_results BigqueryJob#flatten_results}

---

##### `maximumBillingTier`<sup>Optional</sup> <a name="maximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier"></a>

```java
public java.lang.Number getMaximumBillingTier();
```

- *Type:* java.lang.Number

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#maximum_billing_tier BigqueryJob#maximum_billing_tier}

---

##### `maximumBytesBilled`<sup>Optional</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled"></a>

```java
public java.lang.String getMaximumBytesBilled();
```

- *Type:* java.lang.String

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#parameter_mode BigqueryJob#parameter_mode}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#priority BigqueryJob#priority}

---

##### `schemaUpdateOptions`<sup>Optional</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `scriptOptions`<sup>Optional</sup> <a name="scriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions"></a>

```java
public BigqueryJobQueryScriptOptions getScriptOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#script_options BigqueryJob#script_options}

---

##### `useLegacySql`<sup>Optional</sup> <a name="useLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql"></a>

```java
public java.lang.Object getUseLegacySql();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#use_legacy_sql BigqueryJob#use_legacy_sql}

---

##### `useQueryCache`<sup>Optional</sup> <a name="useQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache"></a>

```java
public java.lang.Object getUseQueryCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#use_query_cache BigqueryJob#use_query_cache}

---

##### `userDefinedFunctionResources`<sup>Optional</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources"></a>

```java
public java.lang.Object getUserDefinedFunctionResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>>

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#user_defined_function_resources BigqueryJob#user_defined_function_resources}

---

##### `writeDisposition`<sup>Optional</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobQueryDefaultDataset <a name="BigqueryJobQueryDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDefaultDataset;

BigqueryJobQueryDefaultDataset.builder()
    .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryDestinationEncryptionConfiguration <a name="BigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDestinationEncryptionConfiguration;

BigqueryJobQueryDestinationEncryptionConfiguration.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobQueryDestinationTable <a name="BigqueryJobQueryDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDestinationTable;

BigqueryJobQueryDestinationTable.builder()
    .tableId(java.lang.String)
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project containing this table. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryScriptOptions <a name="BigqueryJobQueryScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryScriptOptions;

BigqueryJobQueryScriptOptions.builder()
//  .keyResultStatement(java.lang.String)
//  .statementByteBudget(java.lang.String)
//  .statementTimeoutMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement">keyResultStatement</a></code> | <code>java.lang.String</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget">statementByteBudget</a></code> | <code>java.lang.String</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>java.lang.String</code> | Timeout period for each statement in a script. |

---

##### `keyResultStatement`<sup>Optional</sup> <a name="keyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```java
public java.lang.String getKeyResultStatement();
```

- *Type:* java.lang.String

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#key_result_statement BigqueryJob#key_result_statement}

---

##### `statementByteBudget`<sup>Optional</sup> <a name="statementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```java
public java.lang.String getStatementByteBudget();
```

- *Type:* java.lang.String

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#statement_byte_budget BigqueryJob#statement_byte_budget}

---

##### `statementTimeoutMs`<sup>Optional</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```java
public java.lang.String getStatementTimeoutMs();
```

- *Type:* java.lang.String

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#statement_timeout_ms BigqueryJob#statement_timeout_ms}

---

### BigqueryJobQueryUserDefinedFunctionResources <a name="BigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryUserDefinedFunctionResources;

BigqueryJobQueryUserDefinedFunctionResources.builder()
//  .inlineCode(java.lang.String)
//  .resourceUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">inlineCode</a></code> | <code>java.lang.String</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `inlineCode`<sup>Optional</sup> <a name="inlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```java
public java.lang.String getInlineCode();
```

- *Type:* java.lang.String

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#inline_code BigqueryJob#inline_code}

---

##### `resourceUri`<sup>Optional</sup> <a name="resourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#resource_uri BigqueryJob#resource_uri}

---

### BigqueryJobStatus <a name="BigqueryJobStatus" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatus;

BigqueryJobStatus.builder()
    .build();
```


### BigqueryJobStatusErrorResult <a name="BigqueryJobStatusErrorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrorResult;

BigqueryJobStatusErrorResult.builder()
    .build();
```


### BigqueryJobStatusErrors <a name="BigqueryJobStatusErrors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrors;

BigqueryJobStatusErrors.builder()
    .build();
```


### BigqueryJobTimeouts <a name="BigqueryJobTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobTimeouts;

BigqueryJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#create BigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#delete BigqueryJob#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#update BigqueryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#create BigqueryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#delete BigqueryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/bigquery_job#update BigqueryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference;

new BigqueryJobCopyDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public BigqueryJobCopyDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### BigqueryJobCopyDestinationTableOutputReference <a name="BigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopyDestinationTableOutputReference;

new BigqueryJobCopyDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```java
public BigqueryJobCopyDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---


### BigqueryJobCopyOutputReference <a name="BigqueryJobCopyOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopyOutputReference;

new BigqueryJobCopyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables">putSourceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(BigqueryJobCopyDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(BigqueryJobCopyDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `putSourceTables` <a name="putSourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables"></a>

```java
public void putSourceTables(IResolvable OR java.util.List<BigqueryJobCopySourceTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>>

---

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable"></a>

```java
public void resetDestinationTable()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables">sourceTables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput">sourceTablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobCopyDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable"></a>

```java
public BigqueryJobCopyDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a>

---

##### `sourceTables`<sup>Required</sup> <a name="sourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables"></a>

```java
public BigqueryJobCopySourceTablesList getSourceTables();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a>

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public BigqueryJobCopyDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```java
public BigqueryJobCopyDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `sourceTablesInput`<sup>Optional</sup> <a name="sourceTablesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```java
public java.lang.Object getSourceTablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue"></a>

```java
public BigqueryJobCopy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---


### BigqueryJobCopySourceTablesList <a name="BigqueryJobCopySourceTablesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopySourceTablesList;

new BigqueryJobCopySourceTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get"></a>

```java
public BigqueryJobCopySourceTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>>

---


### BigqueryJobCopySourceTablesOutputReference <a name="BigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobCopySourceTablesOutputReference;

new BigqueryJobCopySourceTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>

---


### BigqueryJobExtractOutputReference <a name="BigqueryJobExtractOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtractOutputReference;

new BigqueryJobExtractOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel">putSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable">putSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat">resetDestinationFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader">resetPrintHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel">resetSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">resetUseAvroLogicalTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceModel` <a name="putSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel"></a>

```java
public void putSourceModel(BigqueryJobExtractSourceModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `putSourceTable` <a name="putSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable"></a>

```java
public void putSourceTable(BigqueryJobExtractSourceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDestinationFormat` <a name="resetDestinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```java
public void resetDestinationFormat()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetPrintHeader` <a name="resetPrintHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader"></a>

```java
public void resetPrintHeader()
```

##### `resetSourceModel` <a name="resetSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel"></a>

```java
public void resetSourceModel()
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable"></a>

```java
public void resetSourceTable()
```

##### `resetUseAvroLogicalTypes` <a name="resetUseAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```java
public void resetUseAvroLogicalTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel">sourceModel</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable">sourceTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput">destinationFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput">destinationUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput">printHeaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput">sourceModelInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">useAvroLogicalTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat">destinationFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris">destinationUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader">printHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes">useAvroLogicalTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceModel`<sup>Required</sup> <a name="sourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel"></a>

```java
public BigqueryJobExtractSourceModelOutputReference getSourceModel();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a>

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable"></a>

```java
public BigqueryJobExtractSourceTableOutputReference getSourceTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `destinationFormatInput`<sup>Optional</sup> <a name="destinationFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```java
public java.lang.String getDestinationFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationUrisInput`<sup>Optional</sup> <a name="destinationUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```java
public java.util.List<java.lang.String> getDestinationUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `printHeaderInput`<sup>Optional</sup> <a name="printHeaderInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```java
public java.lang.Object getPrintHeaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceModelInput`<sup>Optional</sup> <a name="sourceModelInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```java
public BigqueryJobExtractSourceModel getSourceModelInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```java
public BigqueryJobExtractSourceTable getSourceTableInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `useAvroLogicalTypesInput`<sup>Optional</sup> <a name="useAvroLogicalTypesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```java
public java.lang.Object getUseAvroLogicalTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `destinationFormat`<sup>Required</sup> <a name="destinationFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat"></a>

```java
public java.lang.String getDestinationFormat();
```

- *Type:* java.lang.String

---

##### `destinationUris`<sup>Required</sup> <a name="destinationUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris"></a>

```java
public java.util.List<java.lang.String> getDestinationUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `printHeader`<sup>Required</sup> <a name="printHeader" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader"></a>

```java
public java.lang.Object getPrintHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useAvroLogicalTypes`<sup>Required</sup> <a name="useAvroLogicalTypes" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```java
public java.lang.Object getUseAvroLogicalTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue"></a>

```java
public BigqueryJobExtract getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---


### BigqueryJobExtractSourceModelOutputReference <a name="BigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtractSourceModelOutputReference;

new BigqueryJobExtractSourceModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```java
public BigqueryJobExtractSourceModel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---


### BigqueryJobExtractSourceTableOutputReference <a name="BigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobExtractSourceTableOutputReference;

new BigqueryJobExtractSourceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```java
public BigqueryJobExtractSourceTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---


### BigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference;

new BigqueryJobLoadDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public BigqueryJobLoadDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### BigqueryJobLoadDestinationTableOutputReference <a name="BigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadDestinationTableOutputReference;

new BigqueryJobLoadDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```java
public BigqueryJobLoadDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---


### BigqueryJobLoadOutputReference <a name="BigqueryJobLoadOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadOutputReference;

new BigqueryJobLoadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions">putParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning">putTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows">resetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines">resetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect">resetAutodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues">resetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension">resetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords">resetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker">resetNullMarker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions">resetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields">resetProjectionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote">resetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows">resetSkipLeadingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat">resetSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning">resetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(BigqueryJobLoadDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(BigqueryJobLoadDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `putParquetOptions` <a name="putParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions"></a>

```java
public void putParquetOptions(BigqueryJobLoadParquetOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---

##### `putTimePartitioning` <a name="putTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning"></a>

```java
public void putTimePartitioning(BigqueryJobLoadTimePartitioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `resetAllowJaggedRows` <a name="resetAllowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```java
public void resetAllowJaggedRows()
```

##### `resetAllowQuotedNewlines` <a name="resetAllowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```java
public void resetAllowQuotedNewlines()
```

##### `resetAutodetect` <a name="resetAutodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect"></a>

```java
public void resetAutodetect()
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetIgnoreUnknownValues` <a name="resetIgnoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```java
public void resetIgnoreUnknownValues()
```

##### `resetJsonExtension` <a name="resetJsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension"></a>

```java
public void resetJsonExtension()
```

##### `resetMaxBadRecords` <a name="resetMaxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```java
public void resetMaxBadRecords()
```

##### `resetNullMarker` <a name="resetNullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker"></a>

```java
public void resetNullMarker()
```

##### `resetParquetOptions` <a name="resetParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions"></a>

```java
public void resetParquetOptions()
```

##### `resetProjectionFields` <a name="resetProjectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields"></a>

```java
public void resetProjectionFields()
```

##### `resetQuote` <a name="resetQuote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote"></a>

```java
public void resetQuote()
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```java
public void resetSchemaUpdateOptions()
```

##### `resetSkipLeadingRows` <a name="resetSkipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```java
public void resetSkipLeadingRows()
```

##### `resetSourceFormat` <a name="resetSourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat"></a>

```java
public void resetSourceFormat()
```

##### `resetTimePartitioning` <a name="resetTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```java
public void resetTimePartitioning()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions">parquetOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning">timePartitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput">allowJaggedRowsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">allowQuotedNewlinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput">autodetectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">ignoreUnknownValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput">jsonExtensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput">maxBadRecordsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput">nullMarkerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput">parquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput">projectionFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput">quoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput">skipLeadingRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput">sourceUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput">timePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows">allowJaggedRows</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines">allowQuotedNewlines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect">autodetect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues">ignoreUnknownValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension">jsonExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords">maxBadRecords</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker">nullMarker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields">projectionFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote">quote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows">skipLeadingRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris">sourceUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobLoadDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable"></a>

```java
public BigqueryJobLoadDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a>

---

##### `parquetOptions`<sup>Required</sup> <a name="parquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions"></a>

```java
public BigqueryJobLoadParquetOptionsOutputReference getParquetOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `timePartitioning`<sup>Required</sup> <a name="timePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning"></a>

```java
public BigqueryJobLoadTimePartitioningOutputReference getTimePartitioning();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `allowJaggedRowsInput`<sup>Optional</sup> <a name="allowJaggedRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```java
public java.lang.Object getAllowJaggedRowsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowQuotedNewlinesInput`<sup>Optional</sup> <a name="allowQuotedNewlinesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```java
public java.lang.Object getAllowQuotedNewlinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodetectInput`<sup>Optional</sup> <a name="autodetectInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput"></a>

```java
public java.lang.Object getAutodetectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public BigqueryJobLoadDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```java
public BigqueryJobLoadDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `ignoreUnknownValuesInput`<sup>Optional</sup> <a name="ignoreUnknownValuesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```java
public java.lang.Object getIgnoreUnknownValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonExtensionInput`<sup>Optional</sup> <a name="jsonExtensionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```java
public java.lang.String getJsonExtensionInput();
```

- *Type:* java.lang.String

---

##### `maxBadRecordsInput`<sup>Optional</sup> <a name="maxBadRecordsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```java
public java.lang.Number getMaxBadRecordsInput();
```

- *Type:* java.lang.Number

---

##### `nullMarkerInput`<sup>Optional</sup> <a name="nullMarkerInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```java
public java.lang.String getNullMarkerInput();
```

- *Type:* java.lang.String

---

##### `parquetOptionsInput`<sup>Optional</sup> <a name="parquetOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```java
public BigqueryJobLoadParquetOptions getParquetOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---

##### `projectionFieldsInput`<sup>Optional</sup> <a name="projectionFieldsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```java
public java.util.List<java.lang.String> getProjectionFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quoteInput`<sup>Optional</sup> <a name="quoteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput"></a>

```java
public java.lang.String getQuoteInput();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipLeadingRowsInput`<sup>Optional</sup> <a name="skipLeadingRowsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```java
public java.lang.Number getSkipLeadingRowsInput();
```

- *Type:* java.lang.Number

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```java
public java.lang.String getSourceFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceUrisInput`<sup>Optional</sup> <a name="sourceUrisInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```java
public java.util.List<java.lang.String> getSourceUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timePartitioningInput`<sup>Optional</sup> <a name="timePartitioningInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```java
public BigqueryJobLoadTimePartitioning getTimePartitioningInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `allowJaggedRows`<sup>Required</sup> <a name="allowJaggedRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```java
public java.lang.Object getAllowJaggedRows();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowQuotedNewlines`<sup>Required</sup> <a name="allowQuotedNewlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```java
public java.lang.Object getAllowQuotedNewlines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect"></a>

```java
public java.lang.Object getAutodetect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `ignoreUnknownValues`<sup>Required</sup> <a name="ignoreUnknownValues" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```java
public java.lang.Object getIgnoreUnknownValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonExtension`<sup>Required</sup> <a name="jsonExtension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension"></a>

```java
public java.lang.String getJsonExtension();
```

- *Type:* java.lang.String

---

##### `maxBadRecords`<sup>Required</sup> <a name="maxBadRecords" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```java
public java.lang.Number getMaxBadRecords();
```

- *Type:* java.lang.Number

---

##### `nullMarker`<sup>Required</sup> <a name="nullMarker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker"></a>

```java
public java.lang.String getNullMarker();
```

- *Type:* java.lang.String

---

##### `projectionFields`<sup>Required</sup> <a name="projectionFields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields"></a>

```java
public java.util.List<java.lang.String> getProjectionFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote"></a>

```java
public java.lang.String getQuote();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipLeadingRows`<sup>Required</sup> <a name="skipLeadingRows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```java
public java.lang.Number getSkipLeadingRows();
```

- *Type:* java.lang.Number

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

---

##### `sourceUris`<sup>Required</sup> <a name="sourceUris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris"></a>

```java
public java.util.List<java.lang.String> getSourceUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue"></a>

```java
public BigqueryJobLoad getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---


### BigqueryJobLoadParquetOptionsOutputReference <a name="BigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadParquetOptionsOutputReference;

new BigqueryJobLoadParquetOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">resetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">resetEnumAsString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableListInference` <a name="resetEnableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```java
public void resetEnableListInference()
```

##### `resetEnumAsString` <a name="resetEnumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```java
public void resetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">enableListInferenceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">enumAsStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">enableListInference</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">enumAsString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableListInferenceInput`<sup>Optional</sup> <a name="enableListInferenceInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```java
public java.lang.Object getEnableListInferenceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enumAsStringInput`<sup>Optional</sup> <a name="enumAsStringInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```java
public java.lang.Object getEnumAsStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableListInference`<sup>Required</sup> <a name="enableListInference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```java
public java.lang.Object getEnableListInference();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enumAsString`<sup>Required</sup> <a name="enumAsString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```java
public java.lang.Object getEnumAsString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```java
public BigqueryJobLoadParquetOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---


### BigqueryJobLoadTimePartitioningOutputReference <a name="BigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobLoadTimePartitioningOutputReference;

new BigqueryJobLoadTimePartitioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```java
public void resetExpirationMs()
```

##### `resetField` <a name="resetField" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```java
public java.lang.String getExpirationMsInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```java
public BigqueryJobLoadTimePartitioning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---


### BigqueryJobQueryDefaultDatasetOutputReference <a name="BigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDefaultDatasetOutputReference;

new BigqueryJobQueryDefaultDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```java
public BigqueryJobQueryDefaultDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---


### BigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference;

new BigqueryJobQueryDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public BigqueryJobQueryDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### BigqueryJobQueryDestinationTableOutputReference <a name="BigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryDestinationTableOutputReference;

new BigqueryJobQueryDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```java
public BigqueryJobQueryDestinationTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---


### BigqueryJobQueryOutputReference <a name="BigqueryJobQueryOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryOutputReference;

new BigqueryJobQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset">putDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">putDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions">putScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources">putUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults">resetAllowLargeResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition">resetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset">resetDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">resetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults">resetFlattenResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier">resetMaximumBillingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled">resetMaximumBytesBilled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions">resetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions">resetScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql">resetUseLegacySql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache">resetUseQueryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">resetUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition">resetWriteDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultDataset` <a name="putDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset"></a>

```java
public void putDefaultDataset(BigqueryJobQueryDefaultDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `putDestinationEncryptionConfiguration` <a name="putDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```java
public void putDestinationEncryptionConfiguration(BigqueryJobQueryDestinationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(BigqueryJobQueryDestinationTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `putScriptOptions` <a name="putScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions"></a>

```java
public void putScriptOptions(BigqueryJobQueryScriptOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `putUserDefinedFunctionResources` <a name="putUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```java
public void putUserDefinedFunctionResources(IResolvable OR java.util.List<BigqueryJobQueryUserDefinedFunctionResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>>

---

##### `resetAllowLargeResults` <a name="resetAllowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```java
public void resetAllowLargeResults()
```

##### `resetCreateDisposition` <a name="resetCreateDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```java
public void resetCreateDisposition()
```

##### `resetDefaultDataset` <a name="resetDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```java
public void resetDefaultDataset()
```

##### `resetDestinationEncryptionConfiguration` <a name="resetDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```java
public void resetDestinationEncryptionConfiguration()
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable"></a>

```java
public void resetDestinationTable()
```

##### `resetFlattenResults` <a name="resetFlattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults"></a>

```java
public void resetFlattenResults()
```

##### `resetMaximumBillingTier` <a name="resetMaximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```java
public void resetMaximumBillingTier()
```

##### `resetMaximumBytesBilled` <a name="resetMaximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```java
public void resetMaximumBytesBilled()
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode"></a>

```java
public void resetParameterMode()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSchemaUpdateOptions` <a name="resetSchemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```java
public void resetSchemaUpdateOptions()
```

##### `resetScriptOptions` <a name="resetScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions"></a>

```java
public void resetScriptOptions()
```

##### `resetUseLegacySql` <a name="resetUseLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```java
public void resetUseLegacySql()
```

##### `resetUseQueryCache` <a name="resetUseQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```java
public void resetUseQueryCache()
```

##### `resetUserDefinedFunctionResources` <a name="resetUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```java
public void resetUserDefinedFunctionResources()
```

##### `resetWriteDisposition` <a name="resetWriteDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```java
public void resetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset">defaultDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">destinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions">scriptOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources">userDefinedFunctionResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput">allowLargeResultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput">createDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput">defaultDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">destinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput">flattenResultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput">maximumBillingTierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput">maximumBytesBilledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">schemaUpdateOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput">scriptOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput">useLegacySqlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput">useQueryCacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">userDefinedFunctionResourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput">writeDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults">allowLargeResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition">createDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults">flattenResults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier">maximumBillingTier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled">maximumBytesBilled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode">parameterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions">schemaUpdateOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql">useLegacySql</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache">useQueryCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition">writeDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultDataset`<sup>Required</sup> <a name="defaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset"></a>

```java
public BigqueryJobQueryDefaultDatasetOutputReference getDefaultDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `destinationEncryptionConfiguration`<sup>Required</sup> <a name="destinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```java
public BigqueryJobQueryDestinationEncryptionConfigurationOutputReference getDestinationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable"></a>

```java
public BigqueryJobQueryDestinationTableOutputReference getDestinationTable();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a>

---

##### `scriptOptions`<sup>Required</sup> <a name="scriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions"></a>

```java
public BigqueryJobQueryScriptOptionsOutputReference getScriptOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `userDefinedFunctionResources`<sup>Required</sup> <a name="userDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```java
public BigqueryJobQueryUserDefinedFunctionResourcesList getUserDefinedFunctionResources();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `allowLargeResultsInput`<sup>Optional</sup> <a name="allowLargeResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```java
public java.lang.Object getAllowLargeResultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDispositionInput`<sup>Optional</sup> <a name="createDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```java
public java.lang.String getCreateDispositionInput();
```

- *Type:* java.lang.String

---

##### `defaultDatasetInput`<sup>Optional</sup> <a name="defaultDatasetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```java
public BigqueryJobQueryDefaultDataset getDefaultDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `destinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="destinationEncryptionConfigurationInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```java
public BigqueryJobQueryDestinationEncryptionConfiguration getDestinationEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```java
public BigqueryJobQueryDestinationTable getDestinationTableInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `flattenResultsInput`<sup>Optional</sup> <a name="flattenResultsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```java
public java.lang.Object getFlattenResultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumBillingTierInput`<sup>Optional</sup> <a name="maximumBillingTierInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```java
public java.lang.Number getMaximumBillingTierInput();
```

- *Type:* java.lang.Number

---

##### `maximumBytesBilledInput`<sup>Optional</sup> <a name="maximumBytesBilledInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```java
public java.lang.String getMaximumBytesBilledInput();
```

- *Type:* java.lang.String

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```java
public java.lang.String getParameterModeInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptionsInput`<sup>Optional</sup> <a name="schemaUpdateOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptOptionsInput`<sup>Optional</sup> <a name="scriptOptionsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```java
public BigqueryJobQueryScriptOptions getScriptOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `useLegacySqlInput`<sup>Optional</sup> <a name="useLegacySqlInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```java
public java.lang.Object getUseLegacySqlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useQueryCacheInput`<sup>Optional</sup> <a name="useQueryCacheInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```java
public java.lang.Object getUseQueryCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userDefinedFunctionResourcesInput`<sup>Optional</sup> <a name="userDefinedFunctionResourcesInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```java
public java.lang.Object getUserDefinedFunctionResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>>

---

##### `writeDispositionInput`<sup>Optional</sup> <a name="writeDispositionInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```java
public java.lang.String getWriteDispositionInput();
```

- *Type:* java.lang.String

---

##### `allowLargeResults`<sup>Required</sup> <a name="allowLargeResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```java
public java.lang.Object getAllowLargeResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createDisposition`<sup>Required</sup> <a name="createDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition"></a>

```java
public java.lang.String getCreateDisposition();
```

- *Type:* java.lang.String

---

##### `flattenResults`<sup>Required</sup> <a name="flattenResults" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults"></a>

```java
public java.lang.Object getFlattenResults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumBillingTier`<sup>Required</sup> <a name="maximumBillingTier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```java
public java.lang.Number getMaximumBillingTier();
```

- *Type:* java.lang.Number

---

##### `maximumBytesBilled`<sup>Required</sup> <a name="maximumBytesBilled" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```java
public java.lang.String getMaximumBytesBilled();
```

- *Type:* java.lang.String

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode"></a>

```java
public java.lang.String getParameterMode();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `schemaUpdateOptions`<sup>Required</sup> <a name="schemaUpdateOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```java
public java.util.List<java.lang.String> getSchemaUpdateOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useLegacySql`<sup>Required</sup> <a name="useLegacySql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql"></a>

```java
public java.lang.Object getUseLegacySql();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useQueryCache`<sup>Required</sup> <a name="useQueryCache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache"></a>

```java
public java.lang.Object getUseQueryCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `writeDisposition`<sup>Required</sup> <a name="writeDisposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition"></a>

```java
public java.lang.String getWriteDisposition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue"></a>

```java
public BigqueryJobQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---


### BigqueryJobQueryScriptOptionsOutputReference <a name="BigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryScriptOptionsOutputReference;

new BigqueryJobQueryScriptOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">resetKeyResultStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">resetStatementByteBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">resetStatementTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyResultStatement` <a name="resetKeyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```java
public void resetKeyResultStatement()
```

##### `resetStatementByteBudget` <a name="resetStatementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```java
public void resetStatementByteBudget()
```

##### `resetStatementTimeoutMs` <a name="resetStatementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```java
public void resetStatementTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">keyResultStatementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">statementByteBudgetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">statementTimeoutMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">keyResultStatement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">statementByteBudget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">statementTimeoutMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyResultStatementInput`<sup>Optional</sup> <a name="keyResultStatementInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```java
public java.lang.String getKeyResultStatementInput();
```

- *Type:* java.lang.String

---

##### `statementByteBudgetInput`<sup>Optional</sup> <a name="statementByteBudgetInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```java
public java.lang.String getStatementByteBudgetInput();
```

- *Type:* java.lang.String

---

##### `statementTimeoutMsInput`<sup>Optional</sup> <a name="statementTimeoutMsInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```java
public java.lang.String getStatementTimeoutMsInput();
```

- *Type:* java.lang.String

---

##### `keyResultStatement`<sup>Required</sup> <a name="keyResultStatement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```java
public java.lang.String getKeyResultStatement();
```

- *Type:* java.lang.String

---

##### `statementByteBudget`<sup>Required</sup> <a name="statementByteBudget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```java
public java.lang.String getStatementByteBudget();
```

- *Type:* java.lang.String

---

##### `statementTimeoutMs`<sup>Required</sup> <a name="statementTimeoutMs" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```java
public java.lang.String getStatementTimeoutMs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```java
public BigqueryJobQueryScriptOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---


### BigqueryJobQueryUserDefinedFunctionResourcesList <a name="BigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryUserDefinedFunctionResourcesList;

new BigqueryJobQueryUserDefinedFunctionResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```java
public BigqueryJobQueryUserDefinedFunctionResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>>

---


### BigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="BigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference;

new BigqueryJobQueryUserDefinedFunctionResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">resetInlineCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">resetResourceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInlineCode` <a name="resetInlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```java
public void resetInlineCode()
```

##### `resetResourceUri` <a name="resetResourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```java
public void resetResourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">inlineCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">inlineCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineCodeInput`<sup>Optional</sup> <a name="inlineCodeInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```java
public java.lang.String getInlineCodeInput();
```

- *Type:* java.lang.String

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```java
public java.lang.String getResourceUriInput();
```

- *Type:* java.lang.String

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```java
public java.lang.String getInlineCode();
```

- *Type:* java.lang.String

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>

---


### BigqueryJobStatusErrorResultList <a name="BigqueryJobStatusErrorResultList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrorResultList;

new BigqueryJobStatusErrorResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get"></a>

```java
public BigqueryJobStatusErrorResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BigqueryJobStatusErrorResultOutputReference <a name="BigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrorResultOutputReference;

new BigqueryJobStatusErrorResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```java
public BigqueryJobStatusErrorResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a>

---


### BigqueryJobStatusErrorsList <a name="BigqueryJobStatusErrorsList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrorsList;

new BigqueryJobStatusErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get"></a>

```java
public BigqueryJobStatusErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BigqueryJobStatusErrorsOutputReference <a name="BigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusErrorsOutputReference;

new BigqueryJobStatusErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```java
public BigqueryJobStatusErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a>

---


### BigqueryJobStatusList <a name="BigqueryJobStatusList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusList;

new BigqueryJobStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get"></a>

```java
public BigqueryJobStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BigqueryJobStatusOutputReference <a name="BigqueryJobStatusOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobStatusOutputReference;

new BigqueryJobStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult">errorResult</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorResult`<sup>Required</sup> <a name="errorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult"></a>

```java
public BigqueryJobStatusErrorResultList getErrorResult();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors"></a>

```java
public BigqueryJobStatusErrorsList getErrors();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue"></a>

```java
public BigqueryJobStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a>

---


### BigqueryJobTimeoutsOutputReference <a name="BigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_job.BigqueryJobTimeoutsOutputReference;

new BigqueryJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

---



