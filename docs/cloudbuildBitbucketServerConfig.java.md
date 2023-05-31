# `google_cloudbuild_bitbucket_server_config`

Refer to the Terraform Registory for docs: [`google_cloudbuild_bitbucket_server_config`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config).

# `cloudbuildBitbucketServerConfig` Submodule <a name="`cloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildBitbucketServerConfig <a name="CloudbuildBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfig;

CloudbuildBitbucketServerConfig.Builder.create(Construct scope, java.lang.String id)
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
    .apiKey(java.lang.String)
    .configId(java.lang.String)
    .hostUri(java.lang.String)
    .location(java.lang.String)
    .secrets(CloudbuildBitbucketServerConfigSecrets)
    .username(java.lang.String)
//  .connectedRepositories(IResolvable)
//  .connectedRepositories(java.util.List<CloudbuildBitbucketServerConfigConnectedRepositories>)
//  .id(java.lang.String)
//  .peeredNetwork(java.lang.String)
//  .project(java.lang.String)
//  .sslCa(java.lang.String)
//  .timeouts(CloudbuildBitbucketServerConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.configId">configId</a></code> | <code>java.lang.String</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.hostUri">hostUri</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories">connectedRepositories</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>></code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.sslCa">sslCa</a></code> | <code>java.lang.String</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.configId"></a>

- *Type:* java.lang.String

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.hostUri"></a>

- *Type:* java.lang.String

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.secrets"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}

---

##### `connectedRepositories`<sup>Optional</sup> <a name="connectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>>

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peeredNetwork`<sup>Optional</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork"></a>

- *Type:* java.lang.String

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.sslCa"></a>

- *Type:* java.lang.String

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories">putConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories">resetConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork">resetPeeredNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectedRepositories` <a name="putConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```java
public void putConnectedRepositories(IResolvable OR java.util.List<CloudbuildBitbucketServerConfigConnectedRepositories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>>

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets"></a>

```java
public void putSecrets(CloudbuildBitbucketServerConfigSecrets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts"></a>

```java
public void putTimeouts(CloudbuildBitbucketServerConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

---

##### `resetConnectedRepositories` <a name="resetConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```java
public void resetConnectedRepositories()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId"></a>

```java
public void resetId()
```

##### `resetPeeredNetwork` <a name="resetPeeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```java
public void resetPeeredNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa"></a>

```java
public void resetSslCa()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfig;

CloudbuildBitbucketServerConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfig;

CloudbuildBitbucketServerConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfig;

CloudbuildBitbucketServerConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories">connectedRepositories</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey">webhookKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">connectedRepositoriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput">hostUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput">peeredNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput">secretsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput">sslCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectedRepositories`<sup>Required</sup> <a name="connectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```java
public CloudbuildBitbucketServerConfigConnectedRepositoriesList getConnectedRepositories();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets"></a>

```java
public CloudbuildBitbucketServerConfigSecretsOutputReference getSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts"></a>

```java
public CloudbuildBitbucketServerConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `webhookKey`<sup>Required</sup> <a name="webhookKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey"></a>

```java
public java.lang.String getWebhookKey();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `connectedRepositoriesInput`<sup>Optional</sup> <a name="connectedRepositoriesInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```java
public java.lang.Object getConnectedRepositoriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```java
public java.lang.String getHostUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `peeredNetworkInput`<sup>Optional</sup> <a name="peeredNetworkInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```java
public java.lang.String getPeeredNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput"></a>

```java
public CloudbuildBitbucketServerConfigSecrets getSecretsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```java
public java.lang.String getSslCaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```java
public java.lang.String getPeeredNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildBitbucketServerConfigConfig <a name="CloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigConfig;

CloudbuildBitbucketServerConfigConfig.builder()
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
    .apiKey(java.lang.String)
    .configId(java.lang.String)
    .hostUri(java.lang.String)
    .location(java.lang.String)
    .secrets(CloudbuildBitbucketServerConfigSecrets)
    .username(java.lang.String)
//  .connectedRepositories(IResolvable)
//  .connectedRepositories(java.util.List<CloudbuildBitbucketServerConfigConnectedRepositories>)
//  .id(java.lang.String)
//  .peeredNetwork(java.lang.String)
//  .project(java.lang.String)
//  .sslCa(java.lang.String)
//  .timeouts(CloudbuildBitbucketServerConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories">connectedRepositories</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>></code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```java
public CloudbuildBitbucketServerConfigSecrets getSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}

---

##### `connectedRepositories`<sup>Optional</sup> <a name="connectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```java
public java.lang.Object getConnectedRepositories();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>>

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peeredNetwork`<sup>Optional</sup> <a name="peeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```java
public java.lang.String getPeeredNetwork();
```

- *Type:* java.lang.String

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```java
public CloudbuildBitbucketServerConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}

---

### CloudbuildBitbucketServerConfigConnectedRepositories <a name="CloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigConnectedRepositories;

CloudbuildBitbucketServerConfigConnectedRepositories.builder()
    .projectKey(java.lang.String)
    .repoSlug(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">repoSlug</a></code> | <code>java.lang.String</code> | Identifier for the repository. |

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#project_key CloudbuildBitbucketServerConfig#project_key}

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```java
public java.lang.String getRepoSlug();
```

- *Type:* java.lang.String

Identifier for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#repo_slug CloudbuildBitbucketServerConfig#repo_slug}

---

### CloudbuildBitbucketServerConfigSecrets <a name="CloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigSecrets;

CloudbuildBitbucketServerConfigSecrets.builder()
    .adminAccessTokenVersionName(java.lang.String)
    .readAccessTokenVersionName(java.lang.String)
    .webhookSecretVersionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">adminAccessTokenVersionName</a></code> | <code>java.lang.String</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">readAccessTokenVersionName</a></code> | <code>java.lang.String</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">webhookSecretVersionName</a></code> | <code>java.lang.String</code> | Immutable. |

---

##### `adminAccessTokenVersionName`<sup>Required</sup> <a name="adminAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```java
public java.lang.String getAdminAccessTokenVersionName();
```

- *Type:* java.lang.String

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#admin_access_token_version_name CloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `readAccessTokenVersionName`<sup>Required</sup> <a name="readAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```java
public java.lang.String getReadAccessTokenVersionName();
```

- *Type:* java.lang.String

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#read_access_token_version_name CloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `webhookSecretVersionName`<sup>Required</sup> <a name="webhookSecretVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```java
public java.lang.String getWebhookSecretVersionName();
```

- *Type:* java.lang.String

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#webhook_secret_version_name CloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### CloudbuildBitbucketServerConfigTimeouts <a name="CloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigTimeouts;

CloudbuildBitbucketServerConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigConnectedRepositoriesList;

new CloudbuildBitbucketServerConfigConnectedRepositoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```java
public CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>>

---


### CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference;

new CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">repoSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">repoSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `repoSlugInput`<sup>Optional</sup> <a name="repoSlugInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```java
public java.lang.String getRepoSlugInput();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```java
public java.lang.String getRepoSlug();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudbuildBitbucketServerConfigSecretsOutputReference <a name="CloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigSecretsOutputReference;

new CloudbuildBitbucketServerConfigSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">adminAccessTokenVersionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">readAccessTokenVersionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">webhookSecretVersionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">adminAccessTokenVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">readAccessTokenVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">webhookSecretVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminAccessTokenVersionNameInput`<sup>Optional</sup> <a name="adminAccessTokenVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```java
public java.lang.String getAdminAccessTokenVersionNameInput();
```

- *Type:* java.lang.String

---

##### `readAccessTokenVersionNameInput`<sup>Optional</sup> <a name="readAccessTokenVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```java
public java.lang.String getReadAccessTokenVersionNameInput();
```

- *Type:* java.lang.String

---

##### `webhookSecretVersionNameInput`<sup>Optional</sup> <a name="webhookSecretVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```java
public java.lang.String getWebhookSecretVersionNameInput();
```

- *Type:* java.lang.String

---

##### `adminAccessTokenVersionName`<sup>Required</sup> <a name="adminAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```java
public java.lang.String getAdminAccessTokenVersionName();
```

- *Type:* java.lang.String

---

##### `readAccessTokenVersionName`<sup>Required</sup> <a name="readAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```java
public java.lang.String getReadAccessTokenVersionName();
```

- *Type:* java.lang.String

---

##### `webhookSecretVersionName`<sup>Required</sup> <a name="webhookSecretVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```java
public java.lang.String getWebhookSecretVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```java
public CloudbuildBitbucketServerConfigSecrets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---


### CloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="CloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_bitbucket_server_config.CloudbuildBitbucketServerConfigTimeoutsOutputReference;

new CloudbuildBitbucketServerConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



