# `storageBatchOperationsJob` Submodule <a name="`storageBatchOperationsJob` Submodule" id="@cdktf/provider-google.storageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBatchOperationsJob <a name="StorageBatchOperationsJob" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJob;

StorageBatchOperationsJob.Builder.create(Construct scope, java.lang.String id)
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
//  .bucketList(StorageBatchOperationsJobBucketListStruct)
//  .deleteObject(StorageBatchOperationsJobDeleteObject)
//  .deleteProtection(java.lang.Boolean)
//  .deleteProtection(IResolvable)
//  .id(java.lang.String)
//  .jobId(java.lang.String)
//  .project(java.lang.String)
//  .putMetadata(StorageBatchOperationsJobPutMetadata)
//  .putObjectHold(StorageBatchOperationsJobPutObjectHold)
//  .rewriteObject(StorageBatchOperationsJobRewriteObject)
//  .timeouts(StorageBatchOperationsJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Optional</sup> <a name="bucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.bucketList"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `deleteObject`<sup>Optional</sup> <a name="deleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteObject"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `putMetadata`<sup>Optional</sup> <a name="putMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `putObjectHold`<sup>Optional</sup> <a name="putObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putObjectHold"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `rewriteObject`<sup>Optional</sup> <a name="rewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.rewriteObject"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList">putBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject">putDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata">putPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold">putPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject">putRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList">resetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject">resetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection">resetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata">resetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold">resetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject">resetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketList` <a name="putBucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList"></a>

```java
public void putBucketList(StorageBatchOperationsJobBucketListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `putDeleteObject` <a name="putDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject"></a>

```java
public void putDeleteObject(StorageBatchOperationsJobDeleteObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `putPutMetadata` <a name="putPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata"></a>

```java
public void putPutMetadata(StorageBatchOperationsJobPutMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `putPutObjectHold` <a name="putPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold"></a>

```java
public void putPutObjectHold(StorageBatchOperationsJobPutObjectHold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `putRewriteObject` <a name="putRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject"></a>

```java
public void putRewriteObject(StorageBatchOperationsJobRewriteObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts"></a>

```java
public void putTimeouts(StorageBatchOperationsJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

---

##### `resetBucketList` <a name="resetBucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList"></a>

```java
public void resetBucketList()
```

##### `resetDeleteObject` <a name="resetDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject"></a>

```java
public void resetDeleteObject()
```

##### `resetDeleteProtection` <a name="resetDeleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection"></a>

```java
public void resetDeleteProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId"></a>

```java
public void resetId()
```

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId"></a>

```java
public void resetJobId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPutMetadata` <a name="resetPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata"></a>

```java
public void resetPutMetadata()
```

##### `resetPutObjectHold` <a name="resetPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold"></a>

```java
public void resetPutObjectHold()
```

##### `resetRewriteObject` <a name="resetRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject"></a>

```java
public void resetRewriteObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJob;

StorageBatchOperationsJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJob;

StorageBatchOperationsJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJob;

StorageBatchOperationsJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJob;

StorageBatchOperationsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageBatchOperationsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageBatchOperationsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime">completeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime">scheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput">bucketListInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput">deleteObjectInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput">deleteProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput">putMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput">putObjectHoldInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput">rewriteObjectInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Required</sup> <a name="bucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList"></a>

```java
public StorageBatchOperationsJobBucketListStructOutputReference getBucketList();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `completeTime`<sup>Required</sup> <a name="completeTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime"></a>

```java
public java.lang.String getCompleteTime();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteObject`<sup>Required</sup> <a name="deleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject"></a>

```java
public StorageBatchOperationsJobDeleteObjectOutputReference getDeleteObject();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `putMetadata`<sup>Required</sup> <a name="putMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata"></a>

```java
public StorageBatchOperationsJobPutMetadataOutputReference getPutMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `putObjectHold`<sup>Required</sup> <a name="putObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold"></a>

```java
public StorageBatchOperationsJobPutObjectHoldOutputReference getPutObjectHold();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `rewriteObject`<sup>Required</sup> <a name="rewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject"></a>

```java
public StorageBatchOperationsJobRewriteObjectOutputReference getRewriteObject();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `scheduleTime`<sup>Required</sup> <a name="scheduleTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime"></a>

```java
public java.lang.String getScheduleTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts"></a>

```java
public StorageBatchOperationsJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bucketListInput`<sup>Optional</sup> <a name="bucketListInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput"></a>

```java
public StorageBatchOperationsJobBucketListStruct getBucketListInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `deleteObjectInput`<sup>Optional</sup> <a name="deleteObjectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput"></a>

```java
public StorageBatchOperationsJobDeleteObject getDeleteObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `deleteProtectionInput`<sup>Optional</sup> <a name="deleteProtectionInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput"></a>

```java
public java.lang.Object getDeleteProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `putMetadataInput`<sup>Optional</sup> <a name="putMetadataInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput"></a>

```java
public StorageBatchOperationsJobPutMetadata getPutMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `putObjectHoldInput`<sup>Optional</sup> <a name="putObjectHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput"></a>

```java
public StorageBatchOperationsJobPutObjectHold getPutObjectHoldInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `rewriteObjectInput`<sup>Optional</sup> <a name="rewriteObjectInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput"></a>

```java
public StorageBatchOperationsJobRewriteObject getRewriteObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection"></a>

```java
public java.lang.Object getDeleteProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBatchOperationsJobBucketListBuckets <a name="StorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBuckets;

StorageBatchOperationsJobBucketListBuckets.builder()
    .bucket(java.lang.String)
//  .manifest(StorageBatchOperationsJobBucketListBucketsManifest)
//  .prefixList(StorageBatchOperationsJobBucketListBucketsPrefixListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#bucket StorageBatchOperationsJob#bucket}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```java
public StorageBatchOperationsJobBucketListBucketsManifest getManifest();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#manifest StorageBatchOperationsJob#manifest}

---

##### `prefixList`<sup>Optional</sup> <a name="prefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```java
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct getPrefixList();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#prefix_list StorageBatchOperationsJob#prefix_list}

---

### StorageBatchOperationsJobBucketListBucketsManifest <a name="StorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBucketsManifest;

StorageBatchOperationsJobBucketListBucketsManifest.builder()
//  .manifestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">manifestLocation</a></code> | <code>java.lang.String</code> | Specifies objects in a manifest file. |

---

##### `manifestLocation`<sup>Optional</sup> <a name="manifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```java
public java.lang.String getManifestLocation();
```

- *Type:* java.lang.String

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#manifest_location StorageBatchOperationsJob#manifest_location}

---

### StorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBucketsPrefixListStruct;

StorageBatchOperationsJobBucketListBucketsPrefixListStruct.builder()
//  .includedObjectPrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}. |

---

##### `includedObjectPrefixes`<sup>Optional</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}.

---

### StorageBatchOperationsJobBucketListStruct <a name="StorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListStruct;

StorageBatchOperationsJobBucketListStruct.builder()
    .buckets(StorageBatchOperationsJobBucketListBuckets)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```java
public StorageBatchOperationsJobBucketListBuckets getBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#buckets StorageBatchOperationsJob#buckets}

---

### StorageBatchOperationsJobConfig <a name="StorageBatchOperationsJobConfig" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobConfig;

StorageBatchOperationsJobConfig.builder()
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
//  .bucketList(StorageBatchOperationsJobBucketListStruct)
//  .deleteObject(StorageBatchOperationsJobDeleteObject)
//  .deleteProtection(java.lang.Boolean)
//  .deleteProtection(IResolvable)
//  .id(java.lang.String)
//  .jobId(java.lang.String)
//  .project(java.lang.String)
//  .putMetadata(StorageBatchOperationsJobPutMetadata)
//  .putObjectHold(StorageBatchOperationsJobPutObjectHold)
//  .rewriteObject(StorageBatchOperationsJobRewriteObject)
//  .timeouts(StorageBatchOperationsJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Optional</sup> <a name="bucketList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList"></a>

```java
public StorageBatchOperationsJobBucketListStruct getBucketList();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `deleteObject`<sup>Optional</sup> <a name="deleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject"></a>

```java
public StorageBatchOperationsJobDeleteObject getDeleteObject();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection"></a>

```java
public java.lang.Object getDeleteProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `putMetadata`<sup>Optional</sup> <a name="putMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata"></a>

```java
public StorageBatchOperationsJobPutMetadata getPutMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `putObjectHold`<sup>Optional</sup> <a name="putObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold"></a>

```java
public StorageBatchOperationsJobPutObjectHold getPutObjectHold();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `rewriteObject`<sup>Optional</sup> <a name="rewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject"></a>

```java
public StorageBatchOperationsJobRewriteObject getRewriteObject();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts"></a>

```java
public StorageBatchOperationsJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

### StorageBatchOperationsJobDeleteObject <a name="StorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobDeleteObject;

StorageBatchOperationsJobDeleteObject.builder()
    .permanentObjectDeletionEnabled(java.lang.Boolean)
    .permanentObjectDeletionEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#permanent_object_deletion_enabled StorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### StorageBatchOperationsJobPutMetadata <a name="StorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobPutMetadata;

StorageBatchOperationsJobPutMetadata.builder()
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .customTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime">customTime</a></code> | <code>java.lang.String</code> | Updates the objects fixed custom time metadata. |

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#cache_control StorageBatchOperationsJob#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#content_disposition StorageBatchOperationsJob#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#content_encoding StorageBatchOperationsJob#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#content_language StorageBatchOperationsJob#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#content_type StorageBatchOperationsJob#content_type}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#custom_metadata StorageBatchOperationsJob#custom_metadata}

---

##### `customTime`<sup>Optional</sup> <a name="customTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime"></a>

```java
public java.lang.String getCustomTime();
```

- *Type:* java.lang.String

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#custom_time StorageBatchOperationsJob#custom_time}

---

### StorageBatchOperationsJobPutObjectHold <a name="StorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobPutObjectHold;

StorageBatchOperationsJobPutObjectHold.builder()
//  .eventBasedHold(java.lang.String)
//  .temporaryHold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.String</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.String</code> | set/unset to update temporary based hold for objects. |

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```java
public java.lang.String getEventBasedHold();
```

- *Type:* java.lang.String

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#event_based_hold StorageBatchOperationsJob#event_based_hold}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```java
public java.lang.String getTemporaryHold();
```

- *Type:* java.lang.String

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#temporary_hold StorageBatchOperationsJob#temporary_hold}

---

### StorageBatchOperationsJobRewriteObject <a name="StorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobRewriteObject;

StorageBatchOperationsJobRewriteObject.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | valid kms key. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#kms_key StorageBatchOperationsJob#kms_key}

---

### StorageBatchOperationsJobTimeouts <a name="StorageBatchOperationsJobTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobTimeouts;

StorageBatchOperationsJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="StorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBucketsManifestOutputReference;

new StorageBatchOperationsJobBucketListBucketsManifestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">resetManifestLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManifestLocation` <a name="resetManifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```java
public void resetManifestLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">manifestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">manifestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifestLocationInput`<sup>Optional</sup> <a name="manifestLocationInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```java
public java.lang.String getManifestLocationInput();
```

- *Type:* java.lang.String

---

##### `manifestLocation`<sup>Required</sup> <a name="manifestLocation" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```java
public java.lang.String getManifestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobBucketListBucketsManifest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---


### StorageBatchOperationsJobBucketListBucketsOutputReference <a name="StorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBucketsOutputReference;

new StorageBatchOperationsJobBucketListBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">putPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">resetPrefixList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManifest` <a name="putManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```java
public void putManifest(StorageBatchOperationsJobBucketListBucketsManifest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `putPrefixList` <a name="putPrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```java
public void putPrefixList(StorageBatchOperationsJobBucketListBucketsPrefixListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetPrefixList` <a name="resetPrefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```java
public void resetPrefixList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">manifestInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">prefixListInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```java
public StorageBatchOperationsJobBucketListBucketsManifestOutputReference getManifest();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `prefixList`<sup>Required</sup> <a name="prefixList" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```java
public StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference getPrefixList();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```java
public StorageBatchOperationsJobBucketListBucketsManifest getManifestInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `prefixListInput`<sup>Optional</sup> <a name="prefixListInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```java
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct getPrefixListInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobBucketListBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


### StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference;

new StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">resetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedObjectPrefixes` <a name="resetIncludedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```java
public void resetIncludedObjectPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">includedObjectPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includedObjectPrefixesInput`<sup>Optional</sup> <a name="includedObjectPrefixesInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedObjectPrefixes`<sup>Required</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobBucketListBucketsPrefixListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### StorageBatchOperationsJobBucketListStructOutputReference <a name="StorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobBucketListStructOutputReference;

new StorageBatchOperationsJobBucketListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets">putBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBuckets` <a name="putBuckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```java
public void putBuckets(StorageBatchOperationsJobBucketListBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">bucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```java
public StorageBatchOperationsJobBucketListBucketsOutputReference getBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```java
public StorageBatchOperationsJobBucketListBuckets getBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobBucketListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---


### StorageBatchOperationsJobDeleteObjectOutputReference <a name="StorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobDeleteObjectOutputReference;

new StorageBatchOperationsJobDeleteObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">permanentObjectDeletionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="permanentObjectDeletionEnabledInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobDeleteObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---


### StorageBatchOperationsJobPutMetadataOutputReference <a name="StorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobPutMetadataOutputReference;

new StorageBatchOperationsJobPutMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">resetCustomTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetCustomTime` <a name="resetCustomTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```java
public void resetCustomTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">customMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">customTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime">customTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customTimeInput`<sup>Optional</sup> <a name="customTimeInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```java
public java.lang.String getCustomTimeInput();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customTime`<sup>Required</sup> <a name="customTime" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```java
public java.lang.String getCustomTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobPutMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---


### StorageBatchOperationsJobPutObjectHoldOutputReference <a name="StorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobPutObjectHoldOutputReference;

new StorageBatchOperationsJobPutObjectHoldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">resetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBasedHold` <a name="resetEventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```java
public void resetEventBasedHold()
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```java
public void resetTemporaryHold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">eventBasedHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventBasedHoldInput`<sup>Optional</sup> <a name="eventBasedHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```java
public java.lang.String getEventBasedHoldInput();
```

- *Type:* java.lang.String

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```java
public java.lang.String getTemporaryHoldInput();
```

- *Type:* java.lang.String

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```java
public java.lang.String getEventBasedHold();
```

- *Type:* java.lang.String

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```java
public java.lang.String getTemporaryHold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobPutObjectHold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---


### StorageBatchOperationsJobRewriteObjectOutputReference <a name="StorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobRewriteObjectOutputReference;

new StorageBatchOperationsJobRewriteObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```java
public StorageBatchOperationsJobRewriteObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---


### StorageBatchOperationsJobTimeoutsOutputReference <a name="StorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_batch_operations_job.StorageBatchOperationsJobTimeoutsOutputReference;

new StorageBatchOperationsJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

---



