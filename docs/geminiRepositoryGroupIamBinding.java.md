# `geminiRepositoryGroupIamBinding` Submodule <a name="`geminiRepositoryGroupIamBinding` Submodule" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroupIamBinding <a name="GeminiRepositoryGroupIamBinding" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding google_gemini_repository_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBinding;

GeminiRepositoryGroupIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .codeRepositoryIndex(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .repositoryGroupId(java.lang.String)
    .role(java.lang.String)
//  .condition(GeminiRepositoryGroupIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.codeRepositoryIndex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.repositoryGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#condition GeminiRepositoryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition"></a>

```java
public void putCondition(GeminiRepositoryGroupIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBinding;

GeminiRepositoryGroupIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBinding;

GeminiRepositoryGroupIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBinding;

GeminiRepositoryGroupIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBinding;

GeminiRepositoryGroupIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiRepositoryGroupIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiRepositoryGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiRepositoryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference">GeminiRepositoryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput">codeRepositoryIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput">repositoryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.condition"></a>

```java
public GeminiRepositoryGroupIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference">GeminiRepositoryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `codeRepositoryIndexInput`<sup>Optional</sup> <a name="codeRepositoryIndexInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput"></a>

```java
public java.lang.String getCodeRepositoryIndexInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.conditionInput"></a>

```java
public GeminiRepositoryGroupIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryGroupIdInput`<sup>Optional</sup> <a name="repositoryGroupIdInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput"></a>

```java
public java.lang.String getRepositoryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndex"></a>

```java
public java.lang.String getCodeRepositoryIndex();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupId"></a>

```java
public java.lang.String getRepositoryGroupId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupIamBindingCondition <a name="GeminiRepositoryGroupIamBindingCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBindingCondition;

GeminiRepositoryGroupIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#expression GeminiRepositoryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#title GeminiRepositoryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#description GeminiRepositoryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#expression GeminiRepositoryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#title GeminiRepositoryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#description GeminiRepositoryGroupIamBinding#description}.

---

### GeminiRepositoryGroupIamBindingConfig <a name="GeminiRepositoryGroupIamBindingConfig" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBindingConfig;

GeminiRepositoryGroupIamBindingConfig.builder()
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
    .codeRepositoryIndex(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .repositoryGroupId(java.lang.String)
    .role(java.lang.String)
//  .condition(GeminiRepositoryGroupIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex"></a>

```java
public java.lang.String getCodeRepositoryIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId"></a>

```java
public java.lang.String getRepositoryGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.condition"></a>

```java
public GeminiRepositoryGroupIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#condition GeminiRepositoryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiRepositoryGroupIamBindingConditionOutputReference <a name="GeminiRepositoryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gemini_repository_group_iam_binding.GeminiRepositoryGroupIamBindingConditionOutputReference;

new GeminiRepositoryGroupIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GeminiRepositoryGroupIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---



