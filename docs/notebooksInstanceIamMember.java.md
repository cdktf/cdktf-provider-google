# `notebooksInstanceIamMember` Submodule <a name="`notebooksInstanceIamMember` Submodule" id="@cdktf/provider-google.notebooksInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksInstanceIamMember <a name="NotebooksInstanceIamMember" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member google_notebooks_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMember;

NotebooksInstanceIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .instanceName(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(NotebooksInstanceIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#instance_name NotebooksInstanceIamMember#instance_name}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#member NotebooksInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#role NotebooksInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#id NotebooksInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#location NotebooksInstanceIamMember#location}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#project NotebooksInstanceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#instance_name NotebooksInstanceIamMember#instance_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#member NotebooksInstanceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#role NotebooksInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#condition NotebooksInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#id NotebooksInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#location NotebooksInstanceIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#project NotebooksInstanceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.putCondition"></a>

```java
public void putCondition(NotebooksInstanceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMember;

NotebooksInstanceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMember;

NotebooksInstanceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMember;

NotebooksInstanceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMember;

NotebooksInstanceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotebooksInstanceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NotebooksInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotebooksInstanceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotebooksInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference">NotebooksInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.condition"></a>

```java
public NotebooksInstanceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference">NotebooksInstanceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.conditionInput"></a>

```java
public NotebooksInstanceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksInstanceIamMemberCondition <a name="NotebooksInstanceIamMemberCondition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMemberCondition;

NotebooksInstanceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#expression NotebooksInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#title NotebooksInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#description NotebooksInstanceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#expression NotebooksInstanceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#title NotebooksInstanceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#description NotebooksInstanceIamMember#description}.

---

### NotebooksInstanceIamMemberConfig <a name="NotebooksInstanceIamMemberConfig" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMemberConfig;

NotebooksInstanceIamMemberConfig.builder()
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
    .instanceName(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(NotebooksInstanceIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#instance_name NotebooksInstanceIamMember#instance_name}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#member NotebooksInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#role NotebooksInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#id NotebooksInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#location NotebooksInstanceIamMember#location}. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#project NotebooksInstanceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#instance_name NotebooksInstanceIamMember#instance_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#member NotebooksInstanceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#role NotebooksInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.condition"></a>

```java
public NotebooksInstanceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#condition NotebooksInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#id NotebooksInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#location NotebooksInstanceIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/notebooks_instance_iam_member#project NotebooksInstanceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksInstanceIamMemberConditionOutputReference <a name="NotebooksInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance_iam_member.NotebooksInstanceIamMemberConditionOutputReference;

new NotebooksInstanceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstanceIamMember.NotebooksInstanceIamMemberCondition">NotebooksInstanceIamMemberCondition</a>

---



