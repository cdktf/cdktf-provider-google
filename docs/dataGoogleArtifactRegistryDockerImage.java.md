# `dataGoogleArtifactRegistryDockerImage` Submodule <a name="`dataGoogleArtifactRegistryDockerImage` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImage <a name="DataGoogleArtifactRegistryDockerImage" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImage;

DataGoogleArtifactRegistryDockerImage.Builder.create(Construct scope, java.lang.String id)
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
    .imageName(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImage;

DataGoogleArtifactRegistryDockerImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImage;

DataGoogleArtifactRegistryDockerImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImage;

DataGoogleArtifactRegistryDockerImage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImage;

DataGoogleArtifactRegistryDockerImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryDockerImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryDockerImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime">buildTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes">imageSizeBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType">mediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime">uploadTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `buildTime`<sup>Required</sup> <a name="buildTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime"></a>

```java
public java.lang.String getBuildTime();
```

- *Type:* java.lang.String

---

##### `imageSizeBytes`<sup>Required</sup> <a name="imageSizeBytes" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes"></a>

```java
public java.lang.String getImageSizeBytes();
```

- *Type:* java.lang.String

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType"></a>

```java
public java.lang.String getMediaType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uploadTime`<sup>Required</sup> <a name="uploadTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime"></a>

```java
public java.lang.String getUploadTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImageConfig <a name="DataGoogleArtifactRegistryDockerImageConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_docker_image.DataGoogleArtifactRegistryDockerImageConfig;

DataGoogleArtifactRegistryDockerImageConfig.builder()
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
    .imageName(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---



