# `cloudRunV2WorkerPoolIamBinding` Submodule <a name="`cloudRunV2WorkerPoolIamBinding` Submodule" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2WorkerPoolIamBinding <a name="CloudRunV2WorkerPoolIamBinding" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding google_cloud_run_v2_worker_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBinding;

CloudRunV2WorkerPoolIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .members(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(CloudRunV2WorkerPoolIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#condition CloudRunV2WorkerPoolIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition"></a>

```java
public void putCondition(CloudRunV2WorkerPoolIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBinding;

CloudRunV2WorkerPoolIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBinding;

CloudRunV2WorkerPoolIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBinding;

CloudRunV2WorkerPoolIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBinding;

CloudRunV2WorkerPoolIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudRunV2WorkerPoolIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudRunV2WorkerPoolIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudRunV2WorkerPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2WorkerPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition"></a>

```java
public CloudRunV2WorkerPoolIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput"></a>

```java
public CloudRunV2WorkerPoolIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2WorkerPoolIamBindingCondition <a name="CloudRunV2WorkerPoolIamBindingCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBindingCondition;

CloudRunV2WorkerPoolIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}.

---

### CloudRunV2WorkerPoolIamBindingConfig <a name="CloudRunV2WorkerPoolIamBindingConfig" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBindingConfig;

CloudRunV2WorkerPoolIamBindingConfig.builder()
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
    .members(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(CloudRunV2WorkerPoolIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition"></a>

```java
public CloudRunV2WorkerPoolIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#condition CloudRunV2WorkerPoolIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2WorkerPoolIamBindingConditionOutputReference <a name="CloudRunV2WorkerPoolIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_run_v2_worker_pool_iam_binding.CloudRunV2WorkerPoolIamBindingConditionOutputReference;

new CloudRunV2WorkerPoolIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue"></a>

```java
public CloudRunV2WorkerPoolIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---



