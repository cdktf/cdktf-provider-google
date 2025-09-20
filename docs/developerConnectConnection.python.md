# `developerConnectConnection` Submodule <a name="`developerConnectConnection` Submodule" id="@cdktf/provider-google.developerConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectConnection <a name="DeveloperConnectConnection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  bitbucket_cloud_config: DeveloperConnectConnectionBitbucketCloudConfig = None,
  bitbucket_data_center_config: DeveloperConnectConnectionBitbucketDataCenterConfig = None,
  crypto_key_config: DeveloperConnectConnectionCryptoKeyConfig = None,
  disabled: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  github_config: DeveloperConnectConnectionGithubConfig = None,
  github_enterprise_config: DeveloperConnectConnectionGithubEnterpriseConfig = None,
  gitlab_config: DeveloperConnectConnectionGitlabConfig = None,
  gitlab_enterprise_config: DeveloperConnectConnectionGitlabEnterpriseConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DeveloperConnectConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.bitbucketCloudConfig">bitbucket_cloud_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.bitbucketDataCenterConfig">bitbucket_data_center_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.githubConfig">github_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.githubEnterpriseConfig">github_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.gitlabConfig">gitlab_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.gitlabEnterpriseConfig">gitlab_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.connectionId"></a>

- *Type:* str

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#connection_id DeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#location DeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#annotations DeveloperConnectConnection#annotations}

---

##### `bitbucket_cloud_config`<sup>Optional</sup> <a name="bitbucket_cloud_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.bitbucketCloudConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#bitbucket_cloud_config DeveloperConnectConnection#bitbucket_cloud_config}

---

##### `bitbucket_data_center_config`<sup>Optional</sup> <a name="bitbucket_data_center_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.bitbucketDataCenterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#bitbucket_data_center_config DeveloperConnectConnection#bitbucket_data_center_config}

---

##### `crypto_key_config`<sup>Optional</sup> <a name="crypto_key_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.cryptoKeyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#crypto_key_config DeveloperConnectConnection#crypto_key_config}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#disabled DeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.etag"></a>

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#etag DeveloperConnectConnection#etag}

---

##### `github_config`<sup>Optional</sup> <a name="github_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.githubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_config DeveloperConnectConnection#github_config}

---

##### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.githubEnterpriseConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_enterprise_config DeveloperConnectConnection#github_enterprise_config}

---

##### `gitlab_config`<sup>Optional</sup> <a name="gitlab_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.gitlabConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#gitlab_config DeveloperConnectConnection#gitlab_config}

---

##### `gitlab_enterprise_config`<sup>Optional</sup> <a name="gitlab_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.gitlabEnterpriseConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#gitlab_enterprise_config DeveloperConnectConnection#gitlab_enterprise_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#labels DeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#timeouts DeveloperConnectConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig">put_bitbucket_cloud_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig">put_bitbucket_data_center_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig">put_crypto_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig">put_github_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig">put_github_enterprise_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig">put_gitlab_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig">put_gitlab_enterprise_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig">reset_bitbucket_cloud_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig">reset_bitbucket_data_center_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig">reset_crypto_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig">reset_github_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig">reset_github_enterprise_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig">reset_gitlab_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig">reset_gitlab_enterprise_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bitbucket_cloud_config` <a name="put_bitbucket_cloud_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig"></a>

```python
def put_bitbucket_cloud_config(
  authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential,
  read_authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  workspace: str
) -> None
```

###### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.authorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

###### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.readAuthorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

###### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.webhookSecretSecretVersion"></a>

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate and create webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketCloudConfig.parameter.workspace"></a>

- *Type:* str

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#workspace DeveloperConnectConnection#workspace}

---

##### `put_bitbucket_data_center_config` <a name="put_bitbucket_data_center_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig"></a>

```python
def put_bitbucket_data_center_config(
  authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential,
  host_uri: str,
  read_authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  service_directory_config: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
) -> None
```

###### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.authorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

###### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.hostUri"></a>

- *Type:* str

Required. The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

###### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.readAuthorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

###### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.webhookSecretSecretVersion"></a>

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

###### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putBitbucketDataCenterConfig.parameter.sslCaCertificate"></a>

- *Type:* str

Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

##### `put_crypto_key_config` <a name="put_crypto_key_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig"></a>

```python
def put_crypto_key_config(
  key_reference: str
) -> None
```

###### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putCryptoKeyConfig.parameter.keyReference"></a>

- *Type:* str

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#key_reference DeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_github_config` <a name="put_github_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig"></a>

```python
def put_github_config(
  github_app: str,
  app_installation_id: str = None,
  authorizer_credential: DeveloperConnectConnectionGithubConfigAuthorizerCredential = None
) -> None
```

###### `github_app`<sup>Required</sup> <a name="github_app" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig.parameter.githubApp"></a>

- *Type:* str

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_app DeveloperConnectConnection#github_app}

---

###### `app_installation_id`<sup>Optional</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig.parameter.appInstallationId"></a>

- *Type:* str

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

###### `authorizer_credential`<sup>Optional</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubConfig.parameter.authorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `put_github_enterprise_config` <a name="put_github_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```python
def put_github_enterprise_config(
  host_uri: str,
  app_id: str = None,
  app_installation_id: str = None,
  private_key_secret_version: str = None,
  service_directory_config: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None,
  webhook_secret_secret_version: str = None
) -> None
```

###### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.hostUri"></a>

- *Type:* str

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

###### `app_id`<sup>Optional</sup> <a name="app_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.appId"></a>

- *Type:* str

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_id DeveloperConnectConnection#app_id}

---

###### `app_installation_id`<sup>Optional</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.appInstallationId"></a>

- *Type:* str

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

###### `private_key_secret_version`<sup>Optional</sup> <a name="private_key_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.privateKeySecretVersion"></a>

- *Type:* str

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#private_key_secret_version DeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

###### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.sslCaCertificate"></a>

- *Type:* str

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

###### `webhook_secret_secret_version`<sup>Optional</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGithubEnterpriseConfig.parameter.webhookSecretSecretVersion"></a>

- *Type:* str

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_gitlab_config` <a name="put_gitlab_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig"></a>

```python
def put_gitlab_config(
  authorizer_credential: DeveloperConnectConnectionGitlabConfigAuthorizerCredential,
  read_authorizer_credential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str
) -> None
```

###### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig.parameter.authorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

###### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig.parameter.readAuthorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

###### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabConfig.parameter.webhookSecretSecretVersion"></a>

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_gitlab_enterprise_config` <a name="put_gitlab_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```python
def put_gitlab_enterprise_config(
  authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential,
  host_uri: str,
  read_authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  service_directory_config: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
) -> None
```

###### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.authorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

###### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.hostUri"></a>

- *Type:* str

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

###### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.readAuthorizerCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

###### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.webhookSecretSecretVersion"></a>

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

###### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.sslCaCertificate"></a>

- *Type:* str

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_bitbucket_cloud_config` <a name="reset_bitbucket_cloud_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketCloudConfig"></a>

```python
def reset_bitbucket_cloud_config() -> None
```

##### `reset_bitbucket_data_center_config` <a name="reset_bitbucket_data_center_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetBitbucketDataCenterConfig"></a>

```python
def reset_bitbucket_data_center_config() -> None
```

##### `reset_crypto_key_config` <a name="reset_crypto_key_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetCryptoKeyConfig"></a>

```python
def reset_crypto_key_config() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_github_config` <a name="reset_github_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubConfig"></a>

```python
def reset_github_config() -> None
```

##### `reset_github_enterprise_config` <a name="reset_github_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```python
def reset_github_enterprise_config() -> None
```

##### `reset_gitlab_config` <a name="reset_gitlab_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabConfig"></a>

```python
def reset_gitlab_config() -> None
```

##### `reset_gitlab_enterprise_config` <a name="reset_gitlab_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```python
def reset_gitlab_enterprise_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeveloperConnectConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig">bitbucket_cloud_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig">bitbucket_data_center_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig">github_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig">gitlab_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig">gitlab_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState">installation_state</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput">bitbucket_cloud_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput">bitbucket_data_center_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput">crypto_key_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput">github_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput">github_enterprise_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput">gitlab_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput">gitlab_enterprise_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bitbucket_cloud_config`<sup>Required</sup> <a name="bitbucket_cloud_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfig"></a>

```python
bitbucket_cloud_config: DeveloperConnectConnectionBitbucketCloudConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference">DeveloperConnectConnectionBitbucketCloudConfigOutputReference</a>

---

##### `bitbucket_data_center_config`<sup>Required</sup> <a name="bitbucket_data_center_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfig"></a>

```python
bitbucket_data_center_config: DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `crypto_key_config`<sup>Required</sup> <a name="crypto_key_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfig"></a>

```python
crypto_key_config: DeveloperConnectConnectionCryptoKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference">DeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `github_config`<sup>Required</sup> <a name="github_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfig"></a>

```python
github_config: DeveloperConnectConnectionGithubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference">DeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `github_enterprise_config`<sup>Required</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: DeveloperConnectConnectionGithubEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `gitlab_config`<sup>Required</sup> <a name="gitlab_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfig"></a>

```python
gitlab_config: DeveloperConnectConnectionGitlabConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference">DeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `gitlab_enterprise_config`<sup>Required</sup> <a name="gitlab_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```python
gitlab_enterprise_config: DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `installation_state`<sup>Required</sup> <a name="installation_state" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.installationState"></a>

```python
installation_state: DeveloperConnectConnectionInstallationStateList
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList">DeveloperConnectConnectionInstallationStateList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeouts"></a>

```python
timeouts: DeveloperConnectConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference">DeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bitbucket_cloud_config_input`<sup>Optional</sup> <a name="bitbucket_cloud_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketCloudConfigInput"></a>

```python
bitbucket_cloud_config_input: DeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---

##### `bitbucket_data_center_config_input`<sup>Optional</sup> <a name="bitbucket_data_center_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.bitbucketDataCenterConfigInput"></a>

```python
bitbucket_data_center_config_input: DeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `crypto_key_config_input`<sup>Optional</sup> <a name="crypto_key_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```python
crypto_key_config_input: DeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `github_config_input`<sup>Optional</sup> <a name="github_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubConfigInput"></a>

```python
github_config_input: DeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---

##### `github_enterprise_config_input`<sup>Optional</sup> <a name="github_enterprise_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```python
github_enterprise_config_input: DeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `gitlab_config_input`<sup>Optional</sup> <a name="gitlab_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabConfigInput"></a>

```python
gitlab_config_input: DeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---

##### `gitlab_enterprise_config_input`<sup>Optional</sup> <a name="gitlab_enterprise_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```python
gitlab_enterprise_config_input: DeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DeveloperConnectConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectConnectionBitbucketCloudConfig <a name="DeveloperConnectConnectionBitbucketCloudConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig(
  authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential,
  read_authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  workspace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace">workspace</a></code> | <code>str</code> | Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate and create webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#workspace DeveloperConnectConnection#workspace}

---

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig(
  authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential,
  host_uri: str,
  read_authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  service_directory_config: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri">host_uri</a></code> | <code>str</code> | Required. The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. |

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

Required. The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret used to verify webhook
events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
validate webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionConfig <a name="DeveloperConnectConnectionConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  bitbucket_cloud_config: DeveloperConnectConnectionBitbucketCloudConfig = None,
  bitbucket_data_center_config: DeveloperConnectConnectionBitbucketDataCenterConfig = None,
  crypto_key_config: DeveloperConnectConnectionCryptoKeyConfig = None,
  disabled: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  github_config: DeveloperConnectConnectionGithubConfig = None,
  github_enterprise_config: DeveloperConnectConnectionGithubEnterpriseConfig = None,
  gitlab_config: DeveloperConnectConnectionGitlabConfig = None,
  gitlab_enterprise_config: DeveloperConnectConnectionGitlabEnterpriseConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DeveloperConnectConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig">bitbucket_cloud_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig">bitbucket_data_center_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig">github_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig">gitlab_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">gitlab_enterprise_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#connection_id DeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#location DeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#annotations DeveloperConnectConnection#annotations}

---

##### `bitbucket_cloud_config`<sup>Optional</sup> <a name="bitbucket_cloud_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketCloudConfig"></a>

```python
bitbucket_cloud_config: DeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#bitbucket_cloud_config DeveloperConnectConnection#bitbucket_cloud_config}

---

##### `bitbucket_data_center_config`<sup>Optional</sup> <a name="bitbucket_data_center_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.bitbucketDataCenterConfig"></a>

```python
bitbucket_data_center_config: DeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#bitbucket_data_center_config DeveloperConnectConnection#bitbucket_data_center_config}

---

##### `crypto_key_config`<sup>Optional</sup> <a name="crypto_key_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```python
crypto_key_config: DeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#crypto_key_config DeveloperConnectConnection#crypto_key_config}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#disabled DeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#etag DeveloperConnectConnection#etag}

---

##### `github_config`<sup>Optional</sup> <a name="github_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubConfig"></a>

```python
github_config: DeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_config DeveloperConnectConnection#github_config}

---

##### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: DeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_enterprise_config DeveloperConnectConnection#github_enterprise_config}

---

##### `gitlab_config`<sup>Optional</sup> <a name="gitlab_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```python
gitlab_config: DeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#gitlab_config DeveloperConnectConnection#gitlab_config}

---

##### `gitlab_enterprise_config`<sup>Optional</sup> <a name="gitlab_enterprise_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```python
gitlab_enterprise_config: DeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#gitlab_enterprise_config DeveloperConnectConnection#gitlab_enterprise_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#id DeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#labels DeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#project DeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionConfig.property.timeouts"></a>

```python
timeouts: DeveloperConnectConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#timeouts DeveloperConnectConnection#timeouts}

---

### DeveloperConnectConnectionCryptoKeyConfig <a name="DeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig(
  key_reference: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference">key_reference</a></code> | <code>str</code> | Required. |

---

##### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```python
key_reference: str
```

- *Type:* str

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#key_reference DeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubConfig <a name="DeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubConfig(
  github_app: str,
  app_installation_id: str = None,
  authorizer_credential: DeveloperConnectConnectionGithubConfigAuthorizerCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp">github_app</a></code> | <code>str</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId">app_installation_id</a></code> | <code>str</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `github_app`<sup>Required</sup> <a name="github_app" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```python
github_app: str
```

- *Type:* str

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#github_app DeveloperConnectConnection#github_app}

---

##### `app_installation_id`<sup>Optional</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```python
app_installation_id: str
```

- *Type:* str

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `authorizer_credential`<sup>Optional</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

### DeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential(
  oauth_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauth_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauth_token_secret_version`<sup>Required</sup> <a name="oauth_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```python
oauth_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#oauth_token_secret_version DeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig(
  host_uri: str,
  app_id: str = None,
  app_installation_id: str = None,
  private_key_secret_version: str = None,
  service_directory_config: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None,
  webhook_secret_secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">host_uri</a></code> | <code>str</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId">app_id</a></code> | <code>str</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">app_installation_id</a></code> | <code>str</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">private_key_secret_version</a></code> | <code>str</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `app_id`<sup>Optional</sup> <a name="app_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_id DeveloperConnectConnection#app_id}

---

##### `app_installation_id`<sup>Optional</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```python
app_installation_id: str
```

- *Type:* str

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#app_installation_id DeveloperConnectConnection#app_installation_id}

---

##### `private_key_secret_version`<sup>Optional</sup> <a name="private_key_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```python
private_key_secret_version: str
```

- *Type:* str

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#private_key_secret_version DeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

##### `webhook_secret_secret_version`<sup>Optional</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionGitlabConfig <a name="DeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfig(
  authorizer_credential: DeveloperConnectConnectionGitlabConfigAuthorizerCredential,
  read_authorizer_credential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | Required. |

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig(
  authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential,
  host_uri: str,
  read_authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential,
  webhook_secret_secret_version: str,
  service_directory_config: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig = None,
  ssl_ca_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">host_uri</a></code> | <code>str</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#authorizer_credential DeveloperConnectConnection#authorizer_credential}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#host_uri DeveloperConnectConnection#host_uri}

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#read_authorizer_credential DeveloperConnectConnection#read_authorizer_credential}

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#webhook_secret_secret_version DeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service_directory_config DeveloperConnectConnection#service_directory_config}

---

##### `ssl_ca_certificate`<sup>Optional</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#ssl_ca_certificate DeveloperConnectConnection#ssl_ca_certificate}

---

### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential(
  user_token_secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

### DeveloperConnectConnectionInstallationState <a name="DeveloperConnectConnectionInstallationState" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionInstallationState()
```


### DeveloperConnectConnectionTimeouts <a name="DeveloperConnectConnectionTimeouts" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#create DeveloperConnectConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#delete DeveloperConnectConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#update DeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">put_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">put_read_authorizer_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizer_credential` <a name="put_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```python
def put_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_read_authorizer_credential` <a name="put_read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```python
def put_read_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">read_authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">webhook_secret_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizer_credential_input`<sup>Optional</sup> <a name="authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```python
authorizer_credential_input: DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `read_authorizer_credential_input`<sup>Optional</sup> <a name="read_authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```python
read_authorizer_credential_input: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `webhook_secret_secret_version_input`<sup>Optional</sup> <a name="webhook_secret_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```python
webhook_secret_secret_version_input: str
```

- *Type:* str

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketCloudConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfig">DeveloperConnectConnectionBitbucketCloudConfig</a>

---


### DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">put_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">put_read_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate">reset_ssl_ca_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizer_credential` <a name="put_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```python
def put_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_read_authorizer_credential` <a name="put_read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```python
def put_read_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_ssl_ca_certificate` <a name="reset_ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.resetSslCaCertificate"></a>

```python
def reset_ssl_ca_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">read_authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput">ssl_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">webhook_secret_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `server_version`<sup>Required</sup> <a name="server_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```python
server_version: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizer_credential_input`<sup>Optional</sup> <a name="authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```python
authorizer_credential_input: DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `read_authorizer_credential_input`<sup>Optional</sup> <a name="read_authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```python
read_authorizer_credential_input: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `ssl_ca_certificate_input`<sup>Optional</sup> <a name="ssl_ca_certificate_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificateInput"></a>

```python
ssl_ca_certificate_input: str
```

- *Type:* str

---

##### `webhook_secret_secret_version_input`<sup>Optional</sup> <a name="webhook_secret_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```python
webhook_secret_secret_version_input: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `ssl_ca_certificate`<sup>Required</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketDataCenterConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfig">DeveloperConnectConnectionBitbucketDataCenterConfig</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential">DeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig">DeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="DeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">key_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">key_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_reference_input`<sup>Optional</sup> <a name="key_reference_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```python
key_reference_input: str
```

- *Type:* str

---

##### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```python
key_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionCryptoKeyConfig">DeveloperConnectConnectionCryptoKeyConfig</a>

---


### DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauth_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauth_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `oauth_token_secret_version_input`<sup>Optional</sup> <a name="oauth_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```python
oauth_token_secret_version_input: str
```

- *Type:* str

---

##### `oauth_token_secret_version`<sup>Required</sup> <a name="oauth_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```python
oauth_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGithubConfigOutputReference <a name="DeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">put_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">reset_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">reset_authorizer_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizer_credential` <a name="put_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```python
def put_authorizer_credential(
  oauth_token_secret_version: str
) -> None
```

###### `oauth_token_secret_version`<sup>Required</sup> <a name="oauth_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.oauthTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#oauth_token_secret_version DeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `reset_app_installation_id` <a name="reset_app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```python
def reset_app_installation_id() -> None
```

##### `reset_authorizer_credential` <a name="reset_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```python
def reset_authorizer_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">installation_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">github_app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">github_app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `installation_uri`<sup>Required</sup> <a name="installation_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```python
installation_uri: str
```

- *Type:* str

---

##### `app_installation_id_input`<sup>Optional</sup> <a name="app_installation_id_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```python
app_installation_id_input: str
```

- *Type:* str

---

##### `authorizer_credential_input`<sup>Optional</sup> <a name="authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```python
authorizer_credential_input: DeveloperConnectConnectionGithubConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigAuthorizerCredential">DeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `github_app_input`<sup>Optional</sup> <a name="github_app_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```python
github_app_input: str
```

- *Type:* str

---

##### `app_installation_id`<sup>Required</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```python
app_installation_id: str
```

- *Type:* str

---

##### `github_app`<sup>Required</sup> <a name="github_app" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```python
github_app: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGithubConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubConfig">DeveloperConnectConnectionGithubConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">reset_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">reset_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">reset_private_key_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">reset_ssl_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">reset_webhook_secret_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

##### `reset_app_id` <a name="reset_app_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```python
def reset_app_id() -> None
```

##### `reset_app_installation_id` <a name="reset_app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```python
def reset_app_installation_id() -> None
```

##### `reset_private_key_secret_version` <a name="reset_private_key_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```python
def reset_private_key_secret_version() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_ssl_ca_certificate` <a name="reset_ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```python
def reset_ssl_ca_certificate() -> None
```

##### `reset_webhook_secret_secret_version` <a name="reset_webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```python
def reset_webhook_secret_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">app_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">installation_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">private_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">ssl_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhook_secret_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">private_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_slug`<sup>Required</sup> <a name="app_slug" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```python
app_slug: str
```

- *Type:* str

---

##### `installation_uri`<sup>Required</sup> <a name="installation_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```python
installation_uri: str
```

- *Type:* str

---

##### `server_version`<sup>Required</sup> <a name="server_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```python
server_version: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_installation_id_input`<sup>Optional</sup> <a name="app_installation_id_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```python
app_installation_id_input: str
```

- *Type:* str

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `private_key_secret_version_input`<sup>Optional</sup> <a name="private_key_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```python
private_key_secret_version_input: str
```

- *Type:* str

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ssl_ca_certificate_input`<sup>Optional</sup> <a name="ssl_ca_certificate_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```python
ssl_ca_certificate_input: str
```

- *Type:* str

---

##### `webhook_secret_secret_version_input`<sup>Optional</sup> <a name="webhook_secret_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```python
webhook_secret_secret_version_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_installation_id`<sup>Required</sup> <a name="app_installation_id" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```python
app_installation_id: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `private_key_secret_version`<sup>Required</sup> <a name="private_key_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```python
private_key_secret_version: str
```

- *Type:* str

---

##### `ssl_ca_certificate`<sup>Required</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGithubEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfig">DeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabConfigOutputReference <a name="DeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">put_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">put_read_authorizer_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizer_credential` <a name="put_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```python
def put_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_read_authorizer_credential` <a name="put_read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```python
def put_read_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">read_authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">webhook_secret_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizer_credential_input`<sup>Optional</sup> <a name="authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```python
authorizer_credential_input: DeveloperConnectConnectionGitlabConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigAuthorizerCredential">DeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `read_authorizer_credential_input`<sup>Optional</sup> <a name="read_authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```python
read_authorizer_credential_input: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `webhook_secret_secret_version_input`<sup>Optional</sup> <a name="webhook_secret_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```python
webhook_secret_secret_version_input: str
```

- *Type:* str

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfig">DeveloperConnectConnectionGitlabConfig</a>

---


### DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">put_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">put_read_authorizer_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">reset_ssl_ca_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizer_credential` <a name="put_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```python
def put_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_read_authorizer_credential` <a name="put_read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```python
def put_read_authorizer_credential(
  user_token_secret_version: str
) -> None
```

###### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.userTokenSecretVersion"></a>

- *Type:* str

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#user_token_secret_version DeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/developer_connect_connection#service DeveloperConnectConnection#service}

---

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_ssl_ca_certificate` <a name="reset_ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```python
def reset_ssl_ca_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">read_authorizer_credential</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">read_authorizer_credential_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">ssl_ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhook_secret_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">ssl_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhook_secret_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_credential`<sup>Required</sup> <a name="authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```python
authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `read_authorizer_credential`<sup>Required</sup> <a name="read_authorizer_credential" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```python
read_authorizer_credential: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `server_version`<sup>Required</sup> <a name="server_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```python
server_version: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizer_credential_input`<sup>Optional</sup> <a name="authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```python
authorizer_credential_input: DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `read_authorizer_credential_input`<sup>Optional</sup> <a name="read_authorizer_credential_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```python
read_authorizer_credential_input: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ssl_ca_certificate_input`<sup>Optional</sup> <a name="ssl_ca_certificate_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```python
ssl_ca_certificate_input: str
```

- *Type:* str

---

##### `webhook_secret_secret_version_input`<sup>Optional</sup> <a name="webhook_secret_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```python
webhook_secret_secret_version_input: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `ssl_ca_certificate`<sup>Required</sup> <a name="ssl_ca_certificate" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```python
ssl_ca_certificate: str
```

- *Type:* str

---

##### `webhook_secret_secret_version`<sup>Required</sup> <a name="webhook_secret_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```python
webhook_secret_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabEnterpriseConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfig">DeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">user_token_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">user_token_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_token_secret_version_input`<sup>Optional</sup> <a name="user_token_secret_version_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```python
user_token_secret_version_input: str
```

- *Type:* str

---

##### `user_token_secret_version`<sup>Required</sup> <a name="user_token_secret_version" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```python
user_token_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">DeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">DeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### DeveloperConnectConnectionInstallationStateList <a name="DeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionInstallationStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeveloperConnectConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DeveloperConnectConnectionInstallationStateOutputReference <a name="DeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">action_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_uri`<sup>Required</sup> <a name="action_uri" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```python
action_uri: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectConnectionInstallationState
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionInstallationState">DeveloperConnectConnectionInstallationState</a>

---


### DeveloperConnectConnectionTimeoutsOutputReference <a name="DeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_connection

developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DeveloperConnectConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectConnection.DeveloperConnectConnectionTimeouts">DeveloperConnectConnectionTimeouts</a>]

---



