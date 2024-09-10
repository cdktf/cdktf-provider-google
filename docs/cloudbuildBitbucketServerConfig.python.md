# `cloudbuildBitbucketServerConfig` Submodule <a name="`cloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildBitbucketServerConfig <a name="CloudbuildBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  config_id: str,
  host_uri: str,
  location: str,
  secrets: CloudbuildBitbucketServerConfigSecrets,
  username: str,
  connected_repositories: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]] = None,
  id: str = None,
  peered_network: str = None,
  project: str = None,
  ssl_ca: str = None,
  timeouts: CloudbuildBitbucketServerConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.hostUri">host_uri</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.username">username</a></code> | <code>str</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories">connected_repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork">peered_network</a></code> | <code>str</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.sslCa">ssl_ca</a></code> | <code>str</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.apiKey"></a>

- *Type:* str

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.configId"></a>

- *Type:* str

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.hostUri"></a>

- *Type:* str

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.secrets"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.username"></a>

- *Type:* str

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}

---

##### `connected_repositories`<sup>Optional</sup> <a name="connected_repositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peered_network`<sup>Optional</sup> <a name="peered_network" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork"></a>

- *Type:* str

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.sslCa"></a>

- *Type:* str

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories">put_connected_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories">reset_connected_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork">reset_peered_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa">reset_ssl_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connected_repositories` <a name="put_connected_repositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```python
def put_connected_repositories(
  value: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets"></a>

```python
def put_secrets(
  admin_access_token_version_name: str,
  read_access_token_version_name: str,
  webhook_secret_version_name: str
) -> None
```

###### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets.parameter.adminAccessTokenVersionName"></a>

- *Type:* str

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#admin_access_token_version_name CloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

###### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets.parameter.readAccessTokenVersionName"></a>

- *Type:* str

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#read_access_token_version_name CloudbuildBitbucketServerConfig#read_access_token_version_name}

---

###### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets.parameter.webhookSecretVersionName"></a>

- *Type:* str

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#webhook_secret_version_name CloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}.

---

##### `reset_connected_repositories` <a name="reset_connected_repositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```python
def reset_connected_repositories() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_peered_network` <a name="reset_peered_network" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```python
def reset_peered_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_ssl_ca` <a name="reset_ssl_ca" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa"></a>

```python
def reset_ssl_ca() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudbuildBitbucketServerConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudbuildBitbucketServerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudbuildBitbucketServerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories">connected_repositories</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey">webhook_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">connected_repositories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput">peered_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput">secrets_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput">ssl_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork">peered_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connected_repositories`<sup>Required</sup> <a name="connected_repositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```python
connected_repositories: CloudbuildBitbucketServerConfigConnectedRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets"></a>

```python
secrets: CloudbuildBitbucketServerConfigSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts"></a>

```python
timeouts: CloudbuildBitbucketServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `webhook_key`<sup>Required</sup> <a name="webhook_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey"></a>

```python
webhook_key: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `connected_repositories_input`<sup>Optional</sup> <a name="connected_repositories_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```python
connected_repositories_input: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `peered_network_input`<sup>Optional</sup> <a name="peered_network_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```python
peered_network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput"></a>

```python
secrets_input: CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---

##### `ssl_ca_input`<sup>Optional</sup> <a name="ssl_ca_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```python
ssl_ca_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudbuildBitbucketServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ssl_ca`<sup>Required</sup> <a name="ssl_ca" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildBitbucketServerConfigConfig <a name="CloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  config_id: str,
  host_uri: str,
  location: str,
  secrets: CloudbuildBitbucketServerConfigSecrets,
  username: str,
  connected_repositories: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]] = None,
  id: str = None,
  peered_network: str = None,
  project: str = None,
  ssl_ca: str = None,
  timeouts: CloudbuildBitbucketServerConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey">api_key</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId">config_id</a></code> | <code>str</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri">host_uri</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location">location</a></code> | <code>str</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username">username</a></code> | <code>str</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories">connected_repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork">peered_network</a></code> | <code>str</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```python
secrets: CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}

---

##### `connected_repositories`<sup>Optional</sup> <a name="connected_repositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```python
connected_repositories: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peered_network`<sup>Optional</sup> <a name="peered_network" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```python
timeouts: CloudbuildBitbucketServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}

---

### CloudbuildBitbucketServerConfigConnectedRepositories <a name="CloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories(
  project_key: str,
  repo_slug: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">project_key</a></code> | <code>str</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">repo_slug</a></code> | <code>str</code> | Identifier for the repository. |

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#project_key CloudbuildBitbucketServerConfig#project_key}

---

##### `repo_slug`<sup>Required</sup> <a name="repo_slug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```python
repo_slug: str
```

- *Type:* str

Identifier for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#repo_slug CloudbuildBitbucketServerConfig#repo_slug}

---

### CloudbuildBitbucketServerConfigSecrets <a name="CloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets(
  admin_access_token_version_name: str,
  read_access_token_version_name: str,
  webhook_secret_version_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">admin_access_token_version_name</a></code> | <code>str</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">read_access_token_version_name</a></code> | <code>str</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">webhook_secret_version_name</a></code> | <code>str</code> | Immutable. |

---

##### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```python
admin_access_token_version_name: str
```

- *Type:* str

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#admin_access_token_version_name CloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```python
read_access_token_version_name: str
```

- *Type:* str

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#read_access_token_version_name CloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```python
webhook_secret_version_name: str
```

- *Type:* str

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#webhook_secret_version_name CloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### CloudbuildBitbucketServerConfigTimeouts <a name="CloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---


### CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">repo_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">repo_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `repo_slug_input`<sup>Optional</sup> <a name="repo_slug_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```python
repo_slug_input: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `repo_slug`<sup>Required</sup> <a name="repo_slug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```python
repo_slug: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudbuildBitbucketServerConfigConnectedRepositories]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories">CloudbuildBitbucketServerConfigConnectedRepositories</a>]

---


### CloudbuildBitbucketServerConfigSecretsOutputReference <a name="CloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">admin_access_token_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">read_access_token_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">webhook_secret_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">admin_access_token_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">read_access_token_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">webhook_secret_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_access_token_version_name_input`<sup>Optional</sup> <a name="admin_access_token_version_name_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```python
admin_access_token_version_name_input: str
```

- *Type:* str

---

##### `read_access_token_version_name_input`<sup>Optional</sup> <a name="read_access_token_version_name_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```python
read_access_token_version_name_input: str
```

- *Type:* str

---

##### `webhook_secret_version_name_input`<sup>Optional</sup> <a name="webhook_secret_version_name_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```python
webhook_secret_version_name_input: str
```

- *Type:* str

---

##### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```python
admin_access_token_version_name: str
```

- *Type:* str

---

##### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```python
read_access_token_version_name: str
```

- *Type:* str

---

##### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```python
webhook_secret_version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---


### CloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="CloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_bitbucket_server_config

cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudbuildBitbucketServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>]

---



