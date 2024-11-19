# `secureSourceManagerRepository` Submodule <a name="`secureSourceManagerRepository` Submodule" id="@cdktf/provider-google.secureSourceManagerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerRepository <a name="SecureSourceManagerRepository" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository google_secure_source_manager_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepository;

SecureSourceManagerRepository.Builder.create(Construct scope, java.lang.String id)
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialConfig(SecureSourceManagerRepositoryInitialConfig)
//  .project(java.lang.String)
//  .timeouts(SecureSourceManagerRepositoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#instance SecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#location SecureSourceManagerRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#repository_id SecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#description SecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfig`<sup>Optional</sup> <a name="initialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.initialConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#initial_config SecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#timeouts SecureSourceManagerRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig">putInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetInitialConfig">resetInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialConfig` <a name="putInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig"></a>

```java
public void putInitialConfig(SecureSourceManagerRepositoryInitialConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts"></a>

```java
public void putTimeouts(SecureSourceManagerRepositoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetId"></a>

```java
public void resetId()
```

##### `resetInitialConfig` <a name="resetInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetInitialConfig"></a>

```java
public void resetInitialConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepository;

SecureSourceManagerRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepository;

SecureSourceManagerRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepository;

SecureSourceManagerRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepository;

SecureSourceManagerRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecureSourceManagerRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecureSourceManagerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecureSourceManagerRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecureSourceManagerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference">SecureSourceManagerRepositoryInitialConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference">SecureSourceManagerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uris">uris</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList">SecureSourceManagerRepositoryUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfigInput">initialConfigInput</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `initialConfig`<sup>Required</sup> <a name="initialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfig"></a>

```java
public SecureSourceManagerRepositoryInitialConfigOutputReference getInitialConfig();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference">SecureSourceManagerRepositoryInitialConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeouts"></a>

```java
public SecureSourceManagerRepositoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference">SecureSourceManagerRepositoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uris"></a>

```java
public SecureSourceManagerRepositoryUrisList getUris();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList">SecureSourceManagerRepositoryUrisList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialConfigInput`<sup>Optional</sup> <a name="initialConfigInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfigInput"></a>

```java
public SecureSourceManagerRepositoryInitialConfig getInitialConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerRepositoryConfig <a name="SecureSourceManagerRepositoryConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryConfig;

SecureSourceManagerRepositoryConfig.builder()
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialConfig(SecureSourceManagerRepositoryInitialConfig)
//  .project(java.lang.String)
//  .timeouts(SecureSourceManagerRepositoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#instance SecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#location SecureSourceManagerRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#repository_id SecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#description SecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfig`<sup>Optional</sup> <a name="initialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.initialConfig"></a>

```java
public SecureSourceManagerRepositoryInitialConfig getInitialConfig();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#initial_config SecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.timeouts"></a>

```java
public SecureSourceManagerRepositoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#timeouts SecureSourceManagerRepository#timeouts}

---

### SecureSourceManagerRepositoryInitialConfig <a name="SecureSourceManagerRepositoryInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryInitialConfig;

SecureSourceManagerRepositoryInitialConfig.builder()
//  .defaultBranch(java.lang.String)
//  .gitignores(java.util.List<java.lang.String>)
//  .license(java.lang.String)
//  .readme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Default branch name of the repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.gitignores">gitignores</a></code> | <code>java.util.List<java.lang.String></code> | List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.license">license</a></code> | <code>java.lang.String</code> | License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.readme">readme</a></code> | <code>java.lang.String</code> | README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Default branch name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#default_branch SecureSourceManagerRepository#default_branch}

---

##### `gitignores`<sup>Optional</sup> <a name="gitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.gitignores"></a>

```java
public java.util.List<java.lang.String> getGitignores();
```

- *Type:* java.util.List<java.lang.String>

List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#gitignores SecureSourceManagerRepository#gitignores}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#license SecureSourceManagerRepository#license}

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.readme"></a>

```java
public java.lang.String getReadme();
```

- *Type:* java.lang.String

README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#readme SecureSourceManagerRepository#readme}

---

### SecureSourceManagerRepositoryTimeouts <a name="SecureSourceManagerRepositoryTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryTimeouts;

SecureSourceManagerRepositoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#create SecureSourceManagerRepository#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#delete SecureSourceManagerRepository#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#create SecureSourceManagerRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secure_source_manager_repository#delete SecureSourceManagerRepository#delete}.

---

### SecureSourceManagerRepositoryUris <a name="SecureSourceManagerRepositoryUris" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryUris;

SecureSourceManagerRepositoryUris.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerRepositoryInitialConfigOutputReference <a name="SecureSourceManagerRepositoryInitialConfigOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryInitialConfigOutputReference;

new SecureSourceManagerRepositoryInitialConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores">resetGitignores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme">resetReadme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetGitignores` <a name="resetGitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores"></a>

```java
public void resetGitignores()
```

##### `resetLicense` <a name="resetLicense" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense"></a>

```java
public void resetLicense()
```

##### `resetReadme` <a name="resetReadme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme"></a>

```java
public void resetReadme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput">gitignoresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput">readmeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores">gitignores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readme">readme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `gitignoresInput`<sup>Optional</sup> <a name="gitignoresInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput"></a>

```java
public java.util.List<java.lang.String> getGitignoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `readmeInput`<sup>Optional</sup> <a name="readmeInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput"></a>

```java
public java.lang.String getReadmeInput();
```

- *Type:* java.lang.String

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `gitignores`<sup>Required</sup> <a name="gitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores"></a>

```java
public java.util.List<java.lang.String> getGitignores();
```

- *Type:* java.util.List<java.lang.String>

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `readme`<sup>Required</sup> <a name="readme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readme"></a>

```java
public java.lang.String getReadme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue"></a>

```java
public SecureSourceManagerRepositoryInitialConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---


### SecureSourceManagerRepositoryTimeoutsOutputReference <a name="SecureSourceManagerRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryTimeoutsOutputReference;

new SecureSourceManagerRepositoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

---


### SecureSourceManagerRepositoryUrisList <a name="SecureSourceManagerRepositoryUrisList" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryUrisList;

new SecureSourceManagerRepositoryUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get"></a>

```java
public SecureSourceManagerRepositoryUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecureSourceManagerRepositoryUrisOutputReference <a name="SecureSourceManagerRepositoryUrisOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.secure_source_manager_repository.SecureSourceManagerRepositoryUrisOutputReference;

new SecureSourceManagerRepositoryUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.gitHttps">gitHttps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.html">html</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris">SecureSourceManagerRepositoryUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `gitHttps`<sup>Required</sup> <a name="gitHttps" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.gitHttps"></a>

```java
public java.lang.String getGitHttps();
```

- *Type:* java.lang.String

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.html"></a>

```java
public java.lang.String getHtml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.internalValue"></a>

```java
public SecureSourceManagerRepositoryUris getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris">SecureSourceManagerRepositoryUris</a>

---



