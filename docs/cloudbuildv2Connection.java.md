# `cloudbuildv2Connection` Submodule <a name="`cloudbuildv2Connection` Submodule" id="@cdktf/provider-google.cloudbuildv2Connection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2Connection <a name="Cloudbuildv2Connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection google_cloudbuildv2_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2Connection;

Cloudbuildv2Connection.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .githubConfig(Cloudbuildv2ConnectionGithubConfig)
//  .githubEnterpriseConfig(Cloudbuildv2ConnectionGithubEnterpriseConfig)
//  .gitlabConfig(Cloudbuildv2ConnectionGitlabConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(Cloudbuildv2ConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If disabled is set to true, functionality is disabled for this connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#location Cloudbuildv2Connection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable. The resource name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#name Cloudbuildv2Connection#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#annotations Cloudbuildv2Connection#annotations}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If disabled is set to true, functionality is disabled for this connection.

Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#disabled Cloudbuildv2Connection#disabled}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.githubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#github_config Cloudbuildv2Connection#github_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.githubEnterpriseConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#github_enterprise_config Cloudbuildv2Connection#github_enterprise_config}

---

##### `gitlabConfig`<sup>Optional</sup> <a name="gitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.gitlabConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#gitlab_config Cloudbuildv2Connection#gitlab_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#timeouts Cloudbuildv2Connection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig">putGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig">putGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig">putGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig">resetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig">resetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGithubConfig` <a name="putGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig"></a>

```java
public void putGithubConfig(Cloudbuildv2ConnectionGithubConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `putGithubEnterpriseConfig` <a name="putGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig"></a>

```java
public void putGithubEnterpriseConfig(Cloudbuildv2ConnectionGithubEnterpriseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `putGitlabConfig` <a name="putGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig"></a>

```java
public void putGitlabConfig(Cloudbuildv2ConnectionGitlabConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts"></a>

```java
public void putTimeouts(Cloudbuildv2ConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetGithubConfig` <a name="resetGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig"></a>

```java
public void resetGithubConfig()
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig"></a>

```java
public void resetGithubEnterpriseConfig()
```

##### `resetGitlabConfig` <a name="resetGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig"></a>

```java
public void resetGitlabConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2Connection;

Cloudbuildv2Connection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2Connection;

Cloudbuildv2Connection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2Connection;

Cloudbuildv2Connection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2Connection;

Cloudbuildv2Connection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Cloudbuildv2Connection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Cloudbuildv2Connection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Cloudbuildv2Connection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2Connection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState">installationState</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput">githubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput">gitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `githubConfig`<sup>Required</sup> <a name="githubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig"></a>

```java
public Cloudbuildv2ConnectionGithubConfigOutputReference getGithubConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a>

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference getGithubEnterpriseConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `gitlabConfig`<sup>Required</sup> <a name="gitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigOutputReference getGitlabConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a>

---

##### `installationState`<sup>Required</sup> <a name="installationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState"></a>

```java
public Cloudbuildv2ConnectionInstallationStateList getInstallationState();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts"></a>

```java
public Cloudbuildv2ConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `githubConfigInput`<sup>Optional</sup> <a name="githubConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput"></a>

```java
public Cloudbuildv2ConnectionGithubConfig getGithubConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfig getGithubEnterpriseConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `gitlabConfigInput`<sup>Optional</sup> <a name="gitlabConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput"></a>

```java
public Cloudbuildv2ConnectionGitlabConfig getGitlabConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2ConnectionConfig <a name="Cloudbuildv2ConnectionConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionConfig;

Cloudbuildv2ConnectionConfig.builder()
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
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .githubConfig(Cloudbuildv2ConnectionGithubConfig)
//  .githubEnterpriseConfig(Cloudbuildv2ConnectionGithubEnterpriseConfig)
//  .gitlabConfig(Cloudbuildv2ConnectionGitlabConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(Cloudbuildv2ConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If disabled is set to true, functionality is disabled for this connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#location Cloudbuildv2Connection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable. The resource name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#name Cloudbuildv2Connection#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#annotations Cloudbuildv2Connection#annotations}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If disabled is set to true, functionality is disabled for this connection.

Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#disabled Cloudbuildv2Connection#disabled}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig"></a>

```java
public Cloudbuildv2ConnectionGithubConfig getGithubConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#github_config Cloudbuildv2Connection#github_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfig getGithubEnterpriseConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#github_enterprise_config Cloudbuildv2Connection#github_enterprise_config}

---

##### `gitlabConfig`<sup>Optional</sup> <a name="gitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig"></a>

```java
public Cloudbuildv2ConnectionGitlabConfig getGitlabConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#gitlab_config Cloudbuildv2Connection#gitlab_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts"></a>

```java
public Cloudbuildv2ConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#timeouts Cloudbuildv2Connection#timeouts}

---

### Cloudbuildv2ConnectionGithubConfig <a name="Cloudbuildv2ConnectionGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubConfig;

Cloudbuildv2ConnectionGithubConfig.builder()
//  .appInstallationId(java.lang.Number)
//  .authorizerCredential(Cloudbuildv2ConnectionGithubConfigAuthorizerCredential)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.Number</code> | GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId"></a>

```java
public java.lang.Number getAppInstallationId();
```

- *Type:* java.lang.Number

GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `authorizerCredential`<sup>Optional</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGithubConfigAuthorizerCredential getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

### Cloudbuildv2ConnectionGithubConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential;

Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.builder()
//  .oauthTokenSecretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>java.lang.String</code> | A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauthTokenSecretVersion`<sup>Optional</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```java
public java.lang.String getOauthTokenSecretVersion();
```

- *Type:* java.lang.String

A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#oauth_token_secret_version Cloudbuildv2Connection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubEnterpriseConfig;

Cloudbuildv2ConnectionGithubEnterpriseConfig.builder()
    .hostUri(java.lang.String)
//  .appId(java.lang.Number)
//  .appInstallationId(java.lang.Number)
//  .appSlug(java.lang.String)
//  .privateKeySecretVersion(java.lang.String)
//  .serviceDirectoryConfig(Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig)
//  .sslCa(java.lang.String)
//  .webhookSecretSecretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId">appId</a></code> | <code>java.lang.Number</code> | Id of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.Number</code> | ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug">appSlug</a></code> | <code>java.lang.String</code> | The URL-friendly name of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>java.lang.String</code> | SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>java.lang.String</code> | SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId"></a>

```java
public java.lang.Number getAppId();
```

- *Type:* java.lang.Number

Id of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#app_id Cloudbuildv2Connection#app_id}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```java
public java.lang.Number getAppInstallationId();
```

- *Type:* java.lang.Number

ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `appSlug`<sup>Optional</sup> <a name="appSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug"></a>

```java
public java.lang.String getAppSlug();
```

- *Type:* java.lang.String

The URL-friendly name of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#app_slug Cloudbuildv2Connection#app_slug}

---

##### `privateKeySecretVersion`<sup>Optional</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```java
public java.lang.String getPrivateKeySecretVersion();
```

- *Type:* java.lang.String

SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#private_key_secret_version Cloudbuildv2Connection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

##### `webhookSecretSecretVersion`<sup>Optional</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```java
public java.lang.String getWebhookSecretSecretVersion();
```

- *Type:* java.lang.String

SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig;

Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionGitlabConfig <a name="Cloudbuildv2ConnectionGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfig;

Cloudbuildv2ConnectionGitlabConfig.builder()
    .authorizerCredential(Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential)
    .readAuthorizerCredential(Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential)
    .webhookSecretSecretVersion(java.lang.String)
//  .hostUri(java.lang.String)
//  .serviceDirectoryConfig(Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig)
//  .sslCa(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>java.lang.String</code> | Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | SSL certificate to use for requests to GitLab Enterprise. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential getReadAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```java
public java.lang.String getWebhookSecretSecretVersion();
```

- *Type:* java.lang.String

Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `hostUri`<sup>Optional</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

SSL certificate to use for requests to GitLab Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential;

Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.builder()
    .userTokenSecretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>java.lang.String</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```java
public java.lang.String getUserTokenSecretVersion();
```

- *Type:* java.lang.String

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential;

Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.builder()
    .userTokenSecretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>java.lang.String</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```java
public java.lang.String getUserTokenSecretVersion();
```

- *Type:* java.lang.String

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig;

Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionInstallationState <a name="Cloudbuildv2ConnectionInstallationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionInstallationState;

Cloudbuildv2ConnectionInstallationState.builder()
    .build();
```


### Cloudbuildv2ConnectionTimeouts <a name="Cloudbuildv2ConnectionTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionTimeouts;

Cloudbuildv2ConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference;

new Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion">resetOauthTokenSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthTokenSecretVersion` <a name="resetOauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion"></a>

```java
public void resetOauthTokenSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauthTokenSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `oauthTokenSecretVersionInput`<sup>Optional</sup> <a name="oauthTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```java
public java.lang.String getOauthTokenSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```java
public java.lang.String getOauthTokenSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGithubConfigAuthorizerCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGithubConfigOutputReference <a name="Cloudbuildv2ConnectionGithubConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubConfigOutputReference;

new Cloudbuildv2ConnectionGithubConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential">resetAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```java
public void putAuthorizerCredential(Cloudbuildv2ConnectionGithubConfigAuthorizerCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```java
public void resetAppInstallationId()
```

##### `resetAuthorizerCredential` <a name="resetAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```java
public void resetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```java
public java.lang.Number getAppInstallationIdInput();
```

- *Type:* java.lang.Number

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```java
public Cloudbuildv2ConnectionGithubConfigAuthorizerCredential getAuthorizerCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```java
public java.lang.Number getAppInstallationId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGithubConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference;

new Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug">resetAppSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">resetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">resetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetAppId` <a name="resetAppId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```java
public void resetAppId()
```

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```java
public void resetAppInstallationId()
```

##### `resetAppSlug` <a name="resetAppSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug"></a>

```java
public void resetAppSlug()
```

##### `resetPrivateKeySecretVersion` <a name="resetPrivateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```java
public void resetPrivateKeySecretVersion()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa"></a>

```java
public void resetSslCa()
```

##### `resetWebhookSecretSecretVersion` <a name="resetWebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```java
public void resetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput">appSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">privateKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput">sslCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId">appId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug">appSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```java
public java.lang.Number getAppIdInput();
```

- *Type:* java.lang.Number

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```java
public java.lang.Number getAppInstallationIdInput();
```

- *Type:* java.lang.Number

---

##### `appSlugInput`<sup>Optional</sup> <a name="appSlugInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput"></a>

```java
public java.lang.String getAppSlugInput();
```

- *Type:* java.lang.String

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```java
public java.lang.String getHostUriInput();
```

- *Type:* java.lang.String

---

##### `privateKeySecretVersionInput`<sup>Optional</sup> <a name="privateKeySecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```java
public java.lang.String getPrivateKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput"></a>

```java
public java.lang.String getSslCaInput();
```

- *Type:* java.lang.String

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```java
public java.lang.String getWebhookSecretSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```java
public java.lang.Number getAppId();
```

- *Type:* java.lang.Number

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```java
public java.lang.Number getAppInstallationId();
```

- *Type:* java.lang.Number

---

##### `appSlug`<sup>Required</sup> <a name="appSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```java
public java.lang.String getAppSlug();
```

- *Type:* java.lang.String

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

---

##### `privateKeySecretVersion`<sup>Required</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```java
public java.lang.String getPrivateKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```java
public java.lang.String getWebhookSecretSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference;

new Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference;

new Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```java
public java.lang.String getUserTokenSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```java
public java.lang.String getUserTokenSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigOutputReference;

new Cloudbuildv2ConnectionGitlabConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri">resetHostUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa">resetSslCa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```java
public void putAuthorizerCredential(Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```java
public void putReadAuthorizerCredential(Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `resetHostUri` <a name="resetHostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri"></a>

```java
public void resetHostUri()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa"></a>

```java
public void resetSslCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput">sslCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference getReadAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion"></a>

```java
public java.lang.String getServerVersion();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential getAuthorizerCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput"></a>

```java
public java.lang.String getHostUriInput();
```

- *Type:* java.lang.String

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential getReadAuthorizerCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput"></a>

```java
public java.lang.String getSslCaInput();
```

- *Type:* java.lang.String

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```java
public java.lang.String getWebhookSecretSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```java
public java.lang.String getWebhookSecretSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGitlabConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference;

new Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```java
public java.lang.String getUserTokenSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```java
public java.lang.String getUserTokenSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference;

new Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionInstallationStateList <a name="Cloudbuildv2ConnectionInstallationStateList" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionInstallationStateList;

new Cloudbuildv2ConnectionInstallationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get"></a>

```java
public Cloudbuildv2ConnectionInstallationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### Cloudbuildv2ConnectionInstallationStateOutputReference <a name="Cloudbuildv2ConnectionInstallationStateOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionInstallationStateOutputReference;

new Cloudbuildv2ConnectionInstallationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri">actionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionUri`<sup>Required</sup> <a name="actionUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri"></a>

```java
public java.lang.String getActionUri();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue"></a>

```java
public Cloudbuildv2ConnectionInstallationState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a>

---


### Cloudbuildv2ConnectionTimeoutsOutputReference <a name="Cloudbuildv2ConnectionTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuildv2_connection.Cloudbuildv2ConnectionTimeoutsOutputReference;

new Cloudbuildv2ConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---



