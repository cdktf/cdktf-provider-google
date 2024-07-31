# `iapAppEngineVersionIamBinding` Submodule <a name="`iapAppEngineVersionIamBinding` Submodule" id="@cdktf/provider-google.iapAppEngineVersionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineVersionIamBinding <a name="IapAppEngineVersionIamBinding" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding google_iap_app_engine_version_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBinding;

IapAppEngineVersionIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .service(java.lang.String)
    .versionId(java.lang.String)
//  .condition(IapAppEngineVersionIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#app_id IapAppEngineVersionIamBinding#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#members IapAppEngineVersionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#role IapAppEngineVersionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#service IapAppEngineVersionIamBinding#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#version_id IapAppEngineVersionIamBinding#version_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#id IapAppEngineVersionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#project IapAppEngineVersionIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#app_id IapAppEngineVersionIamBinding#app_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#members IapAppEngineVersionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#role IapAppEngineVersionIamBinding#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#service IapAppEngineVersionIamBinding#service}.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.versionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#version_id IapAppEngineVersionIamBinding#version_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#condition IapAppEngineVersionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#id IapAppEngineVersionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#project IapAppEngineVersionIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.putCondition"></a>

```java
public void putCondition(IapAppEngineVersionIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IapAppEngineVersionIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBinding;

IapAppEngineVersionIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBinding;

IapAppEngineVersionIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBinding;

IapAppEngineVersionIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBinding;

IapAppEngineVersionIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapAppEngineVersionIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IapAppEngineVersionIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapAppEngineVersionIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapAppEngineVersionIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IapAppEngineVersionIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference">IapAppEngineVersionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.condition"></a>

```java
public IapAppEngineVersionIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference">IapAppEngineVersionIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.conditionInput"></a>

```java
public IapAppEngineVersionIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineVersionIamBindingCondition <a name="IapAppEngineVersionIamBindingCondition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBindingCondition;

IapAppEngineVersionIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#expression IapAppEngineVersionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#title IapAppEngineVersionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#description IapAppEngineVersionIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#expression IapAppEngineVersionIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#title IapAppEngineVersionIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#description IapAppEngineVersionIamBinding#description}.

---

### IapAppEngineVersionIamBindingConfig <a name="IapAppEngineVersionIamBindingConfig" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBindingConfig;

IapAppEngineVersionIamBindingConfig.builder()
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
    .appId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .service(java.lang.String)
    .versionId(java.lang.String)
//  .condition(IapAppEngineVersionIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#app_id IapAppEngineVersionIamBinding#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#members IapAppEngineVersionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#role IapAppEngineVersionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#service IapAppEngineVersionIamBinding#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#version_id IapAppEngineVersionIamBinding#version_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#id IapAppEngineVersionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#project IapAppEngineVersionIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#app_id IapAppEngineVersionIamBinding#app_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#members IapAppEngineVersionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#role IapAppEngineVersionIamBinding#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#service IapAppEngineVersionIamBinding#service}.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#version_id IapAppEngineVersionIamBinding#version_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.condition"></a>

```java
public IapAppEngineVersionIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#condition IapAppEngineVersionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#id IapAppEngineVersionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/iap_app_engine_version_iam_binding#project IapAppEngineVersionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineVersionIamBindingConditionOutputReference <a name="IapAppEngineVersionIamBindingConditionOutputReference" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_version_iam_binding.IapAppEngineVersionIamBindingConditionOutputReference;

new IapAppEngineVersionIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingConditionOutputReference.property.internalValue"></a>

```java
public IapAppEngineVersionIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamBinding.IapAppEngineVersionIamBindingCondition">IapAppEngineVersionIamBindingCondition</a>

---



