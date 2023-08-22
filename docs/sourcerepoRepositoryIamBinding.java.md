# `google_sourcerepo_repository_iam_binding`

Refer to the Terraform Registory for docs: [`google_sourcerepo_repository_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding).

# `sourcerepoRepositoryIamBinding` Submodule <a name="`sourcerepoRepositoryIamBinding` Submodule" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SourcerepoRepositoryIamBinding <a name="SourcerepoRepositoryIamBinding" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding google_sourcerepo_repository_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBinding;

SourcerepoRepositoryIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(SourcerepoRepositoryIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#members SourcerepoRepositoryIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#repository SourcerepoRepositoryIamBinding#repository}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#role SourcerepoRepositoryIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#id SourcerepoRepositoryIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#project SourcerepoRepositoryIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#members SourcerepoRepositoryIamBinding#members}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#repository SourcerepoRepositoryIamBinding#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#role SourcerepoRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#condition SourcerepoRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#id SourcerepoRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#project SourcerepoRepositoryIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.putCondition"></a>

```java
public void putCondition(SourcerepoRepositoryIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBinding;

SourcerepoRepositoryIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBinding;

SourcerepoRepositoryIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBinding;

SourcerepoRepositoryIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference">SourcerepoRepositoryIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.condition"></a>

```java
public SourcerepoRepositoryIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference">SourcerepoRepositoryIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.conditionInput"></a>

```java
public SourcerepoRepositoryIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SourcerepoRepositoryIamBindingCondition <a name="SourcerepoRepositoryIamBindingCondition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBindingCondition;

SourcerepoRepositoryIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#expression SourcerepoRepositoryIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#title SourcerepoRepositoryIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#description SourcerepoRepositoryIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#expression SourcerepoRepositoryIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#title SourcerepoRepositoryIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#description SourcerepoRepositoryIamBinding#description}.

---

### SourcerepoRepositoryIamBindingConfig <a name="SourcerepoRepositoryIamBindingConfig" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBindingConfig;

SourcerepoRepositoryIamBindingConfig.builder()
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
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(SourcerepoRepositoryIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#members SourcerepoRepositoryIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#repository SourcerepoRepositoryIamBinding#repository}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#role SourcerepoRepositoryIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#id SourcerepoRepositoryIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#project SourcerepoRepositoryIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#members SourcerepoRepositoryIamBinding#members}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#repository SourcerepoRepositoryIamBinding#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#role SourcerepoRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.condition"></a>

```java
public SourcerepoRepositoryIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#condition SourcerepoRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#id SourcerepoRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/sourcerepo_repository_iam_binding#project SourcerepoRepositoryIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SourcerepoRepositoryIamBindingConditionOutputReference <a name="SourcerepoRepositoryIamBindingConditionOutputReference" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sourcerepo_repository_iam_binding.SourcerepoRepositoryIamBindingConditionOutputReference;

new SourcerepoRepositoryIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingConditionOutputReference.property.internalValue"></a>

```java
public SourcerepoRepositoryIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamBinding.SourcerepoRepositoryIamBindingCondition">SourcerepoRepositoryIamBindingCondition</a>

---



