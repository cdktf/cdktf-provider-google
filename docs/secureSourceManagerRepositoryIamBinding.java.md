# `secureSourceManagerRepositoryIamBinding` Submodule <a name="`secureSourceManagerRepositoryIamBinding` Submodule" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerRepositoryIamBinding <a name="SecureSourceManagerRepositoryIamBinding" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding google_secure_source_manager_repository_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBinding;

SecureSourceManagerRepositoryIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .repositoryId(java.lang.String)
    .role(java.lang.String)
//  .condition(SecureSourceManagerRepositoryIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#members SecureSourceManagerRepositoryIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#repository_id SecureSourceManagerRepositoryIamBinding#repository_id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#role SecureSourceManagerRepositoryIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#id SecureSourceManagerRepositoryIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#location SecureSourceManagerRepositoryIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#project SecureSourceManagerRepositoryIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#members SecureSourceManagerRepositoryIamBinding#members}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#repository_id SecureSourceManagerRepositoryIamBinding#repository_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#role SecureSourceManagerRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#condition SecureSourceManagerRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#id SecureSourceManagerRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#location SecureSourceManagerRepositoryIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#project SecureSourceManagerRepositoryIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.putCondition"></a>

```java
public void putCondition(SecureSourceManagerRepositoryIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerRepositoryIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBinding;

SecureSourceManagerRepositoryIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBinding;

SecureSourceManagerRepositoryIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBinding;

SecureSourceManagerRepositoryIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBinding;

SecureSourceManagerRepositoryIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecureSourceManagerRepositoryIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecureSourceManagerRepositoryIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecureSourceManagerRepositoryIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecureSourceManagerRepositoryIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerRepositoryIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference">SecureSourceManagerRepositoryIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.condition"></a>

```java
public SecureSourceManagerRepositoryIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference">SecureSourceManagerRepositoryIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.conditionInput"></a>

```java
public SecureSourceManagerRepositoryIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerRepositoryIamBindingCondition <a name="SecureSourceManagerRepositoryIamBindingCondition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBindingCondition;

SecureSourceManagerRepositoryIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#expression SecureSourceManagerRepositoryIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#title SecureSourceManagerRepositoryIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#description SecureSourceManagerRepositoryIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#expression SecureSourceManagerRepositoryIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#title SecureSourceManagerRepositoryIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#description SecureSourceManagerRepositoryIamBinding#description}.

---

### SecureSourceManagerRepositoryIamBindingConfig <a name="SecureSourceManagerRepositoryIamBindingConfig" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBindingConfig;

SecureSourceManagerRepositoryIamBindingConfig.builder()
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
    .repositoryId(java.lang.String)
    .role(java.lang.String)
//  .condition(SecureSourceManagerRepositoryIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#members SecureSourceManagerRepositoryIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#repository_id SecureSourceManagerRepositoryIamBinding#repository_id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#role SecureSourceManagerRepositoryIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#id SecureSourceManagerRepositoryIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#location SecureSourceManagerRepositoryIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#project SecureSourceManagerRepositoryIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#members SecureSourceManagerRepositoryIamBinding#members}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#repository_id SecureSourceManagerRepositoryIamBinding#repository_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#role SecureSourceManagerRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.condition"></a>

```java
public SecureSourceManagerRepositoryIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#condition SecureSourceManagerRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#id SecureSourceManagerRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#location SecureSourceManagerRepositoryIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/secure_source_manager_repository_iam_binding#project SecureSourceManagerRepositoryIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerRepositoryIamBindingConditionOutputReference <a name="SecureSourceManagerRepositoryIamBindingConditionOutputReference" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository_iam_binding.SecureSourceManagerRepositoryIamBindingConditionOutputReference;

new SecureSourceManagerRepositoryIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingConditionOutputReference.property.internalValue"></a>

```java
public SecureSourceManagerRepositoryIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepositoryIamBinding.SecureSourceManagerRepositoryIamBindingCondition">SecureSourceManagerRepositoryIamBindingCondition</a>

---



