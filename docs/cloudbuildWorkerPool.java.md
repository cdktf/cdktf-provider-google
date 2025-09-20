# `cloudbuildWorkerPool` Submodule <a name="`cloudbuildWorkerPool` Submodule" id="@cdktf/provider-google.cloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildWorkerPool <a name="CloudbuildWorkerPool" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPool;

CloudbuildWorkerPool.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .networkConfig(CloudbuildWorkerPoolNetworkConfig)
//  .privateServiceConnect(CloudbuildWorkerPoolPrivateServiceConnect)
//  .project(java.lang.String)
//  .timeouts(CloudbuildWorkerPoolTimeouts)
//  .workerConfig(CloudbuildWorkerPoolWorkerConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#location CloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#name CloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#annotations CloudbuildWorkerPool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#display_name CloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#network_config CloudbuildWorkerPool#network_config}

---

##### `privateServiceConnect`<sup>Optional</sup> <a name="privateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.privateServiceConnect"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#private_service_connect CloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#project CloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#timeouts CloudbuildWorkerPool#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.Initializer.parameter.workerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#worker_config CloudbuildWorkerPool#worker_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect">putPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig">putWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetPrivateServiceConnect">resetPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetWorkerConfig">resetWorkerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig"></a>

```java
public void putNetworkConfig(CloudbuildWorkerPoolNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---

##### `putPrivateServiceConnect` <a name="putPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect"></a>

```java
public void putPrivateServiceConnect(CloudbuildWorkerPoolPrivateServiceConnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putPrivateServiceConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts"></a>

```java
public void putTimeouts(CloudbuildWorkerPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---

##### `putWorkerConfig` <a name="putWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig"></a>

```java
public void putWorkerConfig(CloudbuildWorkerPoolWorkerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetPrivateServiceConnect` <a name="resetPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetPrivateServiceConnect"></a>

```java
public void resetPrivateServiceConnect()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerConfig` <a name="resetWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.resetWorkerConfig"></a>

```java
public void resetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudbuildWorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPool;

CloudbuildWorkerPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPool;

CloudbuildWorkerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPool;

CloudbuildWorkerPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPool;

CloudbuildWorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudbuildWorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudbuildWorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference">CloudbuildWorkerPoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference">CloudbuildWorkerPoolPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference">CloudbuildWorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference">CloudbuildWorkerPoolWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnectInput">privateServiceConnectInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfigInput">workerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfig"></a>

```java
public CloudbuildWorkerPoolNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference">CloudbuildWorkerPoolNetworkConfigOutputReference</a>

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnect"></a>

```java
public CloudbuildWorkerPoolPrivateServiceConnectOutputReference getPrivateServiceConnect();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference">CloudbuildWorkerPoolPrivateServiceConnectOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeouts"></a>

```java
public CloudbuildWorkerPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference">CloudbuildWorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfig"></a>

```java
public CloudbuildWorkerPoolWorkerConfigOutputReference getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference">CloudbuildWorkerPoolWorkerConfigOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.networkConfigInput"></a>

```java
public CloudbuildWorkerPoolNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---

##### `privateServiceConnectInput`<sup>Optional</sup> <a name="privateServiceConnectInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.privateServiceConnectInput"></a>

```java
public CloudbuildWorkerPoolPrivateServiceConnect getPrivateServiceConnectInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---

##### `workerConfigInput`<sup>Optional</sup> <a name="workerConfigInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.workerConfigInput"></a>

```java
public CloudbuildWorkerPoolWorkerConfig getWorkerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildWorkerPoolConfig <a name="CloudbuildWorkerPoolConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolConfig;

CloudbuildWorkerPoolConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .networkConfig(CloudbuildWorkerPoolNetworkConfig)
//  .privateServiceConnect(CloudbuildWorkerPoolPrivateServiceConnect)
//  .project(java.lang.String)
//  .timeouts(CloudbuildWorkerPoolTimeouts)
//  .workerConfig(CloudbuildWorkerPoolWorkerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#location CloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#name CloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#annotations CloudbuildWorkerPool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#display_name CloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#id CloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.networkConfig"></a>

```java
public CloudbuildWorkerPoolNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#network_config CloudbuildWorkerPool#network_config}

---

##### `privateServiceConnect`<sup>Optional</sup> <a name="privateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.privateServiceConnect"></a>

```java
public CloudbuildWorkerPoolPrivateServiceConnect getPrivateServiceConnect();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#private_service_connect CloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#project CloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.timeouts"></a>

```java
public CloudbuildWorkerPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#timeouts CloudbuildWorkerPool#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolConfig.property.workerConfig"></a>

```java
public CloudbuildWorkerPoolWorkerConfig getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#worker_config CloudbuildWorkerPool#worker_config}

---

### CloudbuildWorkerPoolNetworkConfig <a name="CloudbuildWorkerPoolNetworkConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolNetworkConfig;

CloudbuildWorkerPoolNetworkConfig.builder()
    .peeredNetwork(java.lang.String)
//  .peeredNetworkIpRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetwork"></a>

```java
public java.lang.String getPeeredNetwork();
```

- *Type:* java.lang.String

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#peered_network CloudbuildWorkerPool#peered_network}

---

##### `peeredNetworkIpRange`<sup>Optional</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange"></a>

```java
public java.lang.String getPeeredNetworkIpRange();
```

- *Type:* java.lang.String

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#peered_network_ip_range CloudbuildWorkerPool#peered_network_ip_range}

---

### CloudbuildWorkerPoolPrivateServiceConnect <a name="CloudbuildWorkerPoolPrivateServiceConnect" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolPrivateServiceConnect;

CloudbuildWorkerPoolPrivateServiceConnect.builder()
    .networkAttachment(java.lang.String)
//  .routeAllTraffic(java.lang.Boolean)
//  .routeAllTraffic(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic">routeAllTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Immutable. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#network_attachment CloudbuildWorkerPool#network_attachment}

---

##### `routeAllTraffic`<sup>Optional</sup> <a name="routeAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic"></a>

```java
public java.lang.Object getRouteAllTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#route_all_traffic CloudbuildWorkerPool#route_all_traffic}

---

### CloudbuildWorkerPoolTimeouts <a name="CloudbuildWorkerPoolTimeouts" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolTimeouts;

CloudbuildWorkerPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#create CloudbuildWorkerPool#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#delete CloudbuildWorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#update CloudbuildWorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#create CloudbuildWorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#delete CloudbuildWorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#update CloudbuildWorkerPool#update}.

---

### CloudbuildWorkerPoolWorkerConfig <a name="CloudbuildWorkerPoolWorkerConfig" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolWorkerConfig;

CloudbuildWorkerPoolWorkerConfig.builder()
//  .diskSizeGb(java.lang.Number)
//  .machineType(java.lang.String)
//  .noExternalIp(java.lang.Boolean)
//  .noExternalIp(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the disk attached to the worker, in GB. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Machine type of a worker, such as `n1-standard-1`. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.noExternalIp">noExternalIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, workers are created without any public address, which prevents network egress to public IPs. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#disk_size_gb CloudbuildWorkerPool#disk_size_gb}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#machine_type CloudbuildWorkerPool#machine_type}

---

##### `noExternalIp`<sup>Optional</sup> <a name="noExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig.property.noExternalIp"></a>

```java
public java.lang.Object getNoExternalIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuild_worker_pool#no_external_ip CloudbuildWorkerPool#no_external_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildWorkerPoolNetworkConfigOutputReference <a name="CloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolNetworkConfigOutputReference;

new CloudbuildWorkerPoolNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange">resetPeeredNetworkIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeeredNetworkIpRange` <a name="resetPeeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange"></a>

```java
public void resetPeeredNetworkIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput">peeredNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput">peeredNetworkIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peeredNetworkInput`<sup>Optional</sup> <a name="peeredNetworkInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput"></a>

```java
public java.lang.String getPeeredNetworkInput();
```

- *Type:* java.lang.String

---

##### `peeredNetworkIpRangeInput`<sup>Optional</sup> <a name="peeredNetworkIpRangeInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput"></a>

```java
public java.lang.String getPeeredNetworkIpRangeInput();
```

- *Type:* java.lang.String

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```java
public java.lang.String getPeeredNetwork();
```

- *Type:* java.lang.String

---

##### `peeredNetworkIpRange`<sup>Required</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```java
public java.lang.String getPeeredNetworkIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildWorkerPoolNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolNetworkConfig">CloudbuildWorkerPoolNetworkConfig</a>

---


### CloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="CloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference;

new CloudbuildWorkerPoolPrivateServiceConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic">resetRouteAllTraffic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRouteAllTraffic` <a name="resetRouteAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic"></a>

```java
public void resetRouteAllTraffic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput">routeAllTrafficInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">routeAllTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `routeAllTrafficInput`<sup>Optional</sup> <a name="routeAllTrafficInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput"></a>

```java
public java.lang.Object getRouteAllTrafficInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `routeAllTraffic`<sup>Required</sup> <a name="routeAllTraffic" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```java
public java.lang.Object getRouteAllTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```java
public CloudbuildWorkerPoolPrivateServiceConnect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolPrivateServiceConnect">CloudbuildWorkerPoolPrivateServiceConnect</a>

---


### CloudbuildWorkerPoolTimeoutsOutputReference <a name="CloudbuildWorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolTimeoutsOutputReference;

new CloudbuildWorkerPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolTimeouts">CloudbuildWorkerPoolTimeouts</a>

---


### CloudbuildWorkerPoolWorkerConfigOutputReference <a name="CloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_worker_pool.CloudbuildWorkerPoolWorkerConfigOutputReference;

new CloudbuildWorkerPoolWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp">resetNoExternalIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetNoExternalIp` <a name="resetNoExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp"></a>

```java
public void resetNoExternalIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput">noExternalIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">noExternalIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `noExternalIpInput`<sup>Optional</sup> <a name="noExternalIpInput" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput"></a>

```java
public java.lang.Object getNoExternalIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `noExternalIp`<sup>Required</sup> <a name="noExternalIp" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```java
public java.lang.Object getNoExternalIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildWorkerPoolWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildWorkerPool.CloudbuildWorkerPoolWorkerConfig">CloudbuildWorkerPoolWorkerConfig</a>

---



