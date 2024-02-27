# `dataGoogleArtifactRegistryRepository` Submodule <a name="`dataGoogleArtifactRegistryRepository` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryRepository <a name="DataGoogleArtifactRegistryRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepository;

DataGoogleArtifactRegistryRepository.Builder.create(Construct scope, java.lang.String id)
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
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this repository is located in. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this repository is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#location DataGoogleArtifactRegistryRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#repository_id DataGoogleArtifactRegistryRepository#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepository;

DataGoogleArtifactRegistryRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepository;

DataGoogleArtifactRegistryRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepository;

DataGoogleArtifactRegistryRepository.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepository;

DataGoogleArtifactRegistryRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cleanupPolicies">cleanupPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList">DataGoogleArtifactRegistryRepositoryDockerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList">DataGoogleArtifactRegistryRepositoryMavenConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cleanupPolicies`<sup>Required</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cleanupPolicies"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesList getCleanupPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `cleanupPolicyDryRun`<sup>Required</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```java
public IResolvable getCleanupPolicyDryRun();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dockerConfig`<sup>Required</sup> <a name="dockerConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.dockerConfig"></a>

```java
public DataGoogleArtifactRegistryRepositoryDockerConfigList getDockerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList">DataGoogleArtifactRegistryRepositoryDockerConfigList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mavenConfig`<sup>Required</sup> <a name="mavenConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.mavenConfig"></a>

```java
public DataGoogleArtifactRegistryRepositoryMavenConfigList getMavenConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList">DataGoogleArtifactRegistryRepositoryMavenConfigList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteRepositoryConfig`<sup>Required</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList getRemoteRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `virtualRepositoryConfig`<sup>Required</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList getVirtualRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryRepositoryCleanupPolicies <a name="DataGoogleArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPolicies;

DataGoogleArtifactRegistryRepositoryCleanupPolicies.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition;

DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;

DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryConfig <a name="DataGoogleArtifactRegistryRepositoryConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryConfig;

DataGoogleArtifactRegistryRepositoryConfig.builder()
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
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this repository is located in. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this repository is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#location DataGoogleArtifactRegistryRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#repository_id DataGoogleArtifactRegistryRepository#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}.

---

### DataGoogleArtifactRegistryRepositoryDockerConfig <a name="DataGoogleArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryDockerConfig;

DataGoogleArtifactRegistryRepositoryDockerConfig.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryMavenConfig <a name="DataGoogleArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryMavenConfig;

DataGoogleArtifactRegistryRepositoryMavenConfig.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;

DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig;

DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig.builder()
    .build();
```


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies;

DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">newerThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">tagPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">tagState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">versionNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition">DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newerThan`<sup>Required</sup> <a name="newerThan" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```java
public java.lang.String getNewerThan();
```

- *Type:* java.lang.String

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagPrefixes`<sup>Required</sup> <a name="tagPrefixes" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```java
public java.util.List<java.lang.String> getTagPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagState`<sup>Required</sup> <a name="tagState" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```java
public java.lang.String getTagState();
```

- *Type:* java.lang.String

---

##### `versionNamePrefixes`<sup>Required</sup> <a name="versionNamePrefixes" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getVersionNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition">DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesList <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">keepCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keepCount`<sup>Required</sup> <a name="keepCount" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```java
public java.lang.Number getKeepCount();
```

- *Type:* java.lang.Number

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference;

new DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">mostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPolicies">DataGoogleArtifactRegistryRepositoryCleanupPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mostRecentVersions`<sup>Required</sup> <a name="mostRecentVersions" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList getMostRecentVersions();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList">DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryCleanupPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryCleanupPolicies">DataGoogleArtifactRegistryRepositoryCleanupPolicies</a>

---


### DataGoogleArtifactRegistryRepositoryDockerConfigList <a name="DataGoogleArtifactRegistryRepositoryDockerConfigList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryDockerConfigList;

new DataGoogleArtifactRegistryRepositoryDockerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference <a name="DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference;

new DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">immutableTags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfig">DataGoogleArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `immutableTags`<sup>Required</sup> <a name="immutableTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```java
public IResolvable getImmutableTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryDockerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryDockerConfig">DataGoogleArtifactRegistryRepositoryDockerConfig</a>

---


### DataGoogleArtifactRegistryRepositoryMavenConfigList <a name="DataGoogleArtifactRegistryRepositoryMavenConfigList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryMavenConfigList;

new DataGoogleArtifactRegistryRepositoryMavenConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference <a name="DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference;

new DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">versionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfig">DataGoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowSnapshotOverwrites`<sup>Required</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```java
public IResolvable getAllowSnapshotOverwrites();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `versionPolicy`<sup>Required</sup> <a name="versionPolicy" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```java
public java.lang.String getVersionPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryMavenConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryMavenConfig">DataGoogleArtifactRegistryRepositoryMavenConfig</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">aptRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">mavenRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">npmRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">pythonRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">upstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">yumRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aptRepository`<sup>Required</sup> <a name="aptRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList getAptRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList getDockerRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList</a>

---

##### `mavenRepository`<sup>Required</sup> <a name="mavenRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList getMavenRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList</a>

---

##### `npmRepository`<sup>Required</sup> <a name="npmRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList getNpmRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList</a>

---

##### `pythonRepository`<sup>Required</sup> <a name="pythonRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList getPythonRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList</a>

---

##### `upstreamCredentials`<sup>Required</sup> <a name="upstreamCredentials" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList getUpstreamCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList</a>

---

##### `yumRepository`<sup>Required</sup> <a name="yumRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList getYumRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">usernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernamePasswordCredentials`<sup>Required</sup> <a name="usernamePasswordCredentials" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList getUsernamePasswordCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```java
public java.lang.String getPasswordSecretVersion();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference;

new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList;

new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference;

new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">upstreamPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `upstreamPolicies`<sup>Required</sup> <a name="upstreamPolicies" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList getUpstreamPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList;

new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_repository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference;

new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepository.DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>

---



