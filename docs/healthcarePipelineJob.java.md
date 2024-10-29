# `healthcarePipelineJob` Submodule <a name="`healthcarePipelineJob` Submodule" id="@cdktf/provider-google.healthcarePipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcarePipelineJob <a name="HealthcarePipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job google_healthcare_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJob;

HealthcarePipelineJob.Builder.create(Construct scope, java.lang.String id)
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
    .dataset(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backfillPipelineJob(HealthcarePipelineJobBackfillPipelineJob)
//  .disableLineage(java.lang.Boolean)
//  .disableLineage(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mappingPipelineJob(HealthcarePipelineJobMappingPipelineJob)
//  .reconciliationPipelineJob(HealthcarePipelineJobReconciliationPipelineJob)
//  .timeouts(HealthcarePipelineJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.disableLineage">disableLineage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#dataset HealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#location HealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#name HealthcarePipelineJob#name}

---

##### `backfillPipelineJob`<sup>Optional</sup> <a name="backfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.backfillPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#backfill_pipeline_job HealthcarePipelineJob#backfill_pipeline_job}

---

##### `disableLineage`<sup>Optional</sup> <a name="disableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.disableLineage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#disable_lineage HealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}*-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}*-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#labels HealthcarePipelineJob#labels}

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.mappingPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliationPipelineJob`<sup>Optional</sup> <a name="reconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.reconciliationPipelineJob"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#reconciliation_pipeline_job HealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#timeouts HealthcarePipelineJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob">putBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob">putMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob">putReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob">resetBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage">resetDisableLineage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob">resetReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackfillPipelineJob` <a name="putBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob"></a>

```java
public void putBackfillPipelineJob(HealthcarePipelineJobBackfillPipelineJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `putMappingPipelineJob` <a name="putMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob"></a>

```java
public void putMappingPipelineJob(HealthcarePipelineJobMappingPipelineJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `putReconciliationPipelineJob` <a name="putReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob"></a>

```java
public void putReconciliationPipelineJob(HealthcarePipelineJobReconciliationPipelineJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts"></a>

```java
public void putTimeouts(HealthcarePipelineJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---

##### `resetBackfillPipelineJob` <a name="resetBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob"></a>

```java
public void resetBackfillPipelineJob()
```

##### `resetDisableLineage` <a name="resetDisableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage"></a>

```java
public void resetDisableLineage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob"></a>

```java
public void resetMappingPipelineJob()
```

##### `resetReconciliationPipelineJob` <a name="resetReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob"></a>

```java
public void resetReconciliationPipelineJob()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJob;

HealthcarePipelineJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJob;

HealthcarePipelineJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJob;

HealthcarePipelineJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJob;

HealthcarePipelineJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthcarePipelineJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthcarePipelineJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthcarePipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HealthcarePipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput">backfillPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput">disableLineageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput">reconciliationPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage">disableLineage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backfillPipelineJob`<sup>Required</sup> <a name="backfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob"></a>

```java
public HealthcarePipelineJobBackfillPipelineJobOutputReference getBackfillPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob"></a>

```java
public HealthcarePipelineJobMappingPipelineJobOutputReference getMappingPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a>

---

##### `reconciliationPipelineJob`<sup>Required</sup> <a name="reconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobOutputReference getReconciliationPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts"></a>

```java
public HealthcarePipelineJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a>

---

##### `backfillPipelineJobInput`<sup>Optional</sup> <a name="backfillPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput"></a>

```java
public HealthcarePipelineJobBackfillPipelineJob getBackfillPipelineJobInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `disableLineageInput`<sup>Optional</sup> <a name="disableLineageInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput"></a>

```java
public java.lang.Object getDisableLineageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput"></a>

```java
public HealthcarePipelineJobMappingPipelineJob getMappingPipelineJobInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `reconciliationPipelineJobInput`<sup>Optional</sup> <a name="reconciliationPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJob getReconciliationPipelineJobInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `disableLineage`<sup>Required</sup> <a name="disableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage"></a>

```java
public java.lang.Object getDisableLineage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcarePipelineJobBackfillPipelineJob <a name="HealthcarePipelineJobBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobBackfillPipelineJob;

HealthcarePipelineJobBackfillPipelineJob.builder()
//  .mappingPipelineJob(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>java.lang.String</code> | Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}. |

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob"></a>

```java
public java.lang.String getMappingPipelineJob();
```

- *Type:* java.lang.String

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

### HealthcarePipelineJobConfig <a name="HealthcarePipelineJobConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobConfig;

HealthcarePipelineJobConfig.builder()
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
    .dataset(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backfillPipelineJob(HealthcarePipelineJobBackfillPipelineJob)
//  .disableLineage(java.lang.Boolean)
//  .disableLineage(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mappingPipelineJob(HealthcarePipelineJobMappingPipelineJob)
//  .reconciliationPipelineJob(HealthcarePipelineJobReconciliationPipelineJob)
//  .timeouts(HealthcarePipelineJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage">disableLineage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#dataset HealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#location HealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#name HealthcarePipelineJob#name}

---

##### `backfillPipelineJob`<sup>Optional</sup> <a name="backfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob"></a>

```java
public HealthcarePipelineJobBackfillPipelineJob getBackfillPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#backfill_pipeline_job HealthcarePipelineJob#backfill_pipeline_job}

---

##### `disableLineage`<sup>Optional</sup> <a name="disableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage"></a>

```java
public java.lang.Object getDisableLineage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#disable_lineage HealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}*-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}*-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#labels HealthcarePipelineJob#labels}

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob"></a>

```java
public HealthcarePipelineJobMappingPipelineJob getMappingPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliationPipelineJob`<sup>Optional</sup> <a name="reconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJob getReconciliationPipelineJob();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#reconciliation_pipeline_job HealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts"></a>

```java
public HealthcarePipelineJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#timeouts HealthcarePipelineJob#timeouts}

---

### HealthcarePipelineJobMappingPipelineJob <a name="HealthcarePipelineJobMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJob;

HealthcarePipelineJobMappingPipelineJob.builder()
    .mappingConfig(HealthcarePipelineJobMappingPipelineJobMappingConfig)
//  .fhirStoreDestination(java.lang.String)
//  .fhirStreamingSource(HealthcarePipelineJobMappingPipelineJobFhirStreamingSource)
//  .reconciliationDestination(java.lang.Boolean)
//  .reconciliationDestination(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | mapping_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>java.lang.String</code> | If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | fhir_streaming_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination">reconciliationDestination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset. |

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfig getMappingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#mapping_config HealthcarePipelineJob#mapping_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination"></a>

```java
public java.lang.String getFhirStoreDestination();
```

- *Type:* java.lang.String

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

##### `fhirStreamingSource`<sup>Optional</sup> <a name="fhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource"></a>

```java
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource getFhirStreamingSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#fhir_streaming_source HealthcarePipelineJob#fhir_streaming_source}

---

##### `reconciliationDestination`<sup>Optional</sup> <a name="reconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination"></a>

```java
public java.lang.Object getReconciliationDestination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#reconciliation_destination HealthcarePipelineJob#reconciliation_destination}

---

### HealthcarePipelineJobMappingPipelineJobFhirStreamingSource <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource;

HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.builder()
    .fhirStore(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore">fhirStore</a></code> | <code>java.lang.String</code> | The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description">description</a></code> | <code>java.lang.String</code> | Describes the streaming FHIR data source. |

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore"></a>

```java
public java.lang.String getFhirStore();
```

- *Type:* java.lang.String

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#fhir_store HealthcarePipelineJob#fhir_store}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfig <a name="HealthcarePipelineJobMappingPipelineJobMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobMappingConfig;

HealthcarePipelineJobMappingPipelineJobMappingConfig.builder()
//  .description(java.lang.String)
//  .whistleConfigSource(HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description">description</a></code> | <code>java.lang.String</code> | Describes the mapping configuration. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | whistle_config_source block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

##### `whistleConfigSource`<sup>Optional</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource getWhistleConfigSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;

HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.builder()
    .importUriPrefix(java.lang.String)
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>java.lang.String</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri">uri</a></code> | <code>java.lang.String</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix"></a>

```java
public java.lang.String getImportUriPrefix();
```

- *Type:* java.lang.String

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobReconciliationPipelineJob <a name="HealthcarePipelineJobReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJob;

HealthcarePipelineJobReconciliationPipelineJob.builder()
    .matchingUriPrefix(java.lang.String)
    .mergeConfig(HealthcarePipelineJobReconciliationPipelineJobMergeConfig)
//  .fhirStoreDestination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>java.lang.String</code> | Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | merge_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>java.lang.String</code> | The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}. |

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix"></a>

```java
public java.lang.String getMatchingUriPrefix();
```

- *Type:* java.lang.String

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#matching_uri_prefix HealthcarePipelineJob#matching_uri_prefix}

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig getMergeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#merge_config HealthcarePipelineJob#merge_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination"></a>

```java
public java.lang.String getFhirStoreDestination();
```

- *Type:* java.lang.String

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfig <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJobMergeConfig;

HealthcarePipelineJobReconciliationPipelineJobMergeConfig.builder()
    .whistleConfigSource(HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | whistle_config_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Describes the mapping configuration. |

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource getWhistleConfigSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;

HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.builder()
    .importUriPrefix(java.lang.String)
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>java.lang.String</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri">uri</a></code> | <code>java.lang.String</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix"></a>

```java
public java.lang.String getImportUriPrefix();
```

- *Type:* java.lang.String

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobTimeouts <a name="HealthcarePipelineJobTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobTimeouts;

HealthcarePipelineJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcarePipelineJobBackfillPipelineJobOutputReference <a name="HealthcarePipelineJobBackfillPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobBackfillPipelineJobOutputReference;

new HealthcarePipelineJobBackfillPipelineJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob"></a>

```java
public void resetMappingPipelineJob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput"></a>

```java
public java.lang.String getMappingPipelineJobInput();
```

- *Type:* java.lang.String

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob"></a>

```java
public java.lang.String getMappingPipelineJob();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobBackfillPipelineJob getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---


### HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference;

new HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput">fhirStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore">fhirStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fhirStoreInput`<sup>Optional</sup> <a name="fhirStoreInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput"></a>

```java
public java.lang.String getFhirStoreInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore"></a>

```java
public java.lang.String getFhirStore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference;

new HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource">resetWhistleConfigSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource"></a>

```java
public void putWhistleConfigSource(HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetWhistleConfigSource` <a name="resetWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource"></a>

```java
public void resetWhistleConfigSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference getWhistleConfigSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource getWhistleConfigSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference;

new HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```java
public java.lang.String getImportUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```java
public java.lang.String getImportUriPrefix();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobMappingPipelineJobOutputReference <a name="HealthcarePipelineJobMappingPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobMappingPipelineJobOutputReference;

new HealthcarePipelineJobMappingPipelineJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource">putFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig">putMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource">resetFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination">resetReconciliationDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFhirStreamingSource` <a name="putFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource"></a>

```java
public void putFhirStreamingSource(HealthcarePipelineJobMappingPipelineJobFhirStreamingSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `putMappingConfig` <a name="putMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig"></a>

```java
public void putMappingConfig(HealthcarePipelineJobMappingPipelineJobMappingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination"></a>

```java
public void resetFhirStoreDestination()
```

##### `resetFhirStreamingSource` <a name="resetFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource"></a>

```java
public void resetFhirStreamingSource()
```

##### `resetReconciliationDestination` <a name="resetReconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination"></a>

```java
public void resetReconciliationDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput">fhirStreamingSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput">mappingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput">reconciliationDestinationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination">reconciliationDestination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fhirStreamingSource`<sup>Required</sup> <a name="fhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource"></a>

```java
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference getFhirStreamingSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a>

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference getMappingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```java
public java.lang.String getFhirStoreDestinationInput();
```

- *Type:* java.lang.String

---

##### `fhirStreamingSourceInput`<sup>Optional</sup> <a name="fhirStreamingSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput"></a>

```java
public HealthcarePipelineJobMappingPipelineJobFhirStreamingSource getFhirStreamingSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `mappingConfigInput`<sup>Optional</sup> <a name="mappingConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput"></a>

```java
public HealthcarePipelineJobMappingPipelineJobMappingConfig getMappingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `reconciliationDestinationInput`<sup>Optional</sup> <a name="reconciliationDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput"></a>

```java
public java.lang.Object getReconciliationDestinationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination"></a>

```java
public java.lang.String getFhirStoreDestination();
```

- *Type:* java.lang.String

---

##### `reconciliationDestination`<sup>Required</sup> <a name="reconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination"></a>

```java
public java.lang.Object getReconciliationDestination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobMappingPipelineJob getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource"></a>

```java
public void putWhistleConfigSource(HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference getWhistleConfigSource();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource getWhistleConfigSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference;

new HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```java
public java.lang.String getImportUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```java
public java.lang.String getImportUriPrefix();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobReconciliationPipelineJobOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobReconciliationPipelineJobOutputReference;

new HealthcarePipelineJobReconciliationPipelineJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig">putMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMergeConfig` <a name="putMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig"></a>

```java
public void putMergeConfig(HealthcarePipelineJobReconciliationPipelineJobMergeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination"></a>

```java
public void resetFhirStoreDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput">matchingUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput">mergeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference getMergeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```java
public java.lang.String getFhirStoreDestinationInput();
```

- *Type:* java.lang.String

---

##### `matchingUriPrefixInput`<sup>Optional</sup> <a name="matchingUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput"></a>

```java
public java.lang.String getMatchingUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `mergeConfigInput`<sup>Optional</sup> <a name="mergeConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJobMergeConfig getMergeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination"></a>

```java
public java.lang.String getFhirStoreDestination();
```

- *Type:* java.lang.String

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix"></a>

```java
public java.lang.String getMatchingUriPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue"></a>

```java
public HealthcarePipelineJobReconciliationPipelineJob getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---


### HealthcarePipelineJobTimeoutsOutputReference <a name="HealthcarePipelineJobTimeoutsOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_pipeline_job.HealthcarePipelineJobTimeoutsOutputReference;

new HealthcarePipelineJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---



