# `artifactRegistryRepositoryIamMember` Submodule <a name="`artifactRegistryRepositoryIamMember` Submodule" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepositoryIamMember <a name="ArtifactRegistryRepositoryIamMember" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member google_artifact_registry_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMember;

ArtifactRegistryRepositoryIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .member(java.lang.String)
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(ArtifactRegistryRepositoryIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#condition ArtifactRegistryRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition"></a>

```java
public void putCondition(ArtifactRegistryRepositoryIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactRegistryRepositoryIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMember;

ArtifactRegistryRepositoryIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMember;

ArtifactRegistryRepositoryIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMember;

ArtifactRegistryRepositoryIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMember;

ArtifactRegistryRepositoryIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArtifactRegistryRepositoryIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ArtifactRegistryRepositoryIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArtifactRegistryRepositoryIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArtifactRegistryRepositoryIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepositoryIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition"></a>

```java
public ArtifactRegistryRepositoryIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput"></a>

```java
public ArtifactRegistryRepositoryIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryIamMemberCondition <a name="ArtifactRegistryRepositoryIamMemberCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMemberCondition;

ArtifactRegistryRepositoryIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}.

---

### ArtifactRegistryRepositoryIamMemberConfig <a name="ArtifactRegistryRepositoryIamMemberConfig" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMemberConfig;

ArtifactRegistryRepositoryIamMemberConfig.builder()
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
    .member(java.lang.String)
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(ArtifactRegistryRepositoryIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition"></a>

```java
public ArtifactRegistryRepositoryIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#condition ArtifactRegistryRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryIamMemberConditionOutputReference <a name="ArtifactRegistryRepositoryIamMemberConditionOutputReference" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository_iam_member.ArtifactRegistryRepositoryIamMemberConditionOutputReference;

new ArtifactRegistryRepositoryIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---



