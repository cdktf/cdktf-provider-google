# `apigeeEnvironment` Submodule <a name="`apigeeEnvironment` Submodule" id="@cdktf/provider-google.apigeeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironment <a name="ApigeeEnvironment" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment google_apigee_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  org_id: str,
  api_proxy_type: str = None,
  client_ip_resolution_config: ApigeeEnvironmentClientIpResolutionConfig = None,
  deployment_type: str = None,
  description: str = None,
  display_name: str = None,
  forward_proxy_uri: str = None,
  id: str = None,
  node_config: ApigeeEnvironmentNodeConfig = None,
  properties: ApigeeEnvironmentProperties = None,
  timeouts: ApigeeEnvironmentTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.apiProxyType">api_proxy_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.clientIpResolutionConfig">client_ip_resolution_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | client_ip_resolution_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.type">type</a></code> | <code>str</code> | Types that can be selected for an Environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#org_id ApigeeEnvironment#org_id}

---

##### `api_proxy_type`<sup>Optional</sup> <a name="api_proxy_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.apiProxyType"></a>

- *Type:* str

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#api_proxy_type ApigeeEnvironment#api_proxy_type}

---

##### `client_ip_resolution_config`<sup>Optional</sup> <a name="client_ip_resolution_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.clientIpResolutionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

client_ip_resolution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#client_ip_resolution_config ApigeeEnvironment#client_ip_resolution_config}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.deploymentType"></a>

- *Type:* str

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#deployment_type ApigeeEnvironment#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#description ApigeeEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#display_name ApigeeEnvironment#display_name}

---

##### `forward_proxy_uri`<sup>Optional</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.forwardProxyUri"></a>

- *Type:* str

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#forward_proxy_uri ApigeeEnvironment#forward_proxy_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#node_config ApigeeEnvironment#node_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#properties ApigeeEnvironment#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#timeouts ApigeeEnvironment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.type"></a>

- *Type:* str

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#type ApigeeEnvironment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig">put_client_ip_resolution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType">reset_api_proxy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetClientIpResolutionConfig">reset_client_ip_resolution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetForwardProxyUri">reset_forward_proxy_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_ip_resolution_config` <a name="put_client_ip_resolution_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig"></a>

```python
def put_client_ip_resolution_config(
  header_index_algorithm: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm = None
) -> None
```

###### `header_index_algorithm`<sup>Optional</sup> <a name="header_index_algorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig.parameter.headerIndexAlgorithm"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

header_index_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#header_index_algorithm ApigeeEnvironment#header_index_algorithm}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig"></a>

```python
def put_node_config(
  max_node_count: str = None,
  min_node_count: str = None
) -> None
```

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig.parameter.maxNodeCount"></a>

- *Type:* str

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#max_node_count ApigeeEnvironment#max_node_count}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig.parameter.minNodeCount"></a>

- *Type:* str

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#min_node_count ApigeeEnvironment#min_node_count}

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties"></a>

```python
def put_properties(
  property: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]] = None
) -> None
```

###### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties.parameter.property"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#property ApigeeEnvironment#property}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#create ApigeeEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#update ApigeeEnvironment#update}.

---

##### `reset_api_proxy_type` <a name="reset_api_proxy_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType"></a>

```python
def reset_api_proxy_type() -> None
```

##### `reset_client_ip_resolution_config` <a name="reset_client_ip_resolution_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetClientIpResolutionConfig"></a>

```python
def reset_client_ip_resolution_config() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_forward_proxy_uri` <a name="reset_forward_proxy_uri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetForwardProxyUri"></a>

```python
def reset_forward_proxy_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfig">client_ip_resolution_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference">ApigeeEnvironmentClientIpResolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference">ApigeeEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput">api_proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfigInput">client_ip_resolution_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUriInput">forward_proxy_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType">api_proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_ip_resolution_config`<sup>Required</sup> <a name="client_ip_resolution_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfig"></a>

```python
client_ip_resolution_config: ApigeeEnvironmentClientIpResolutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference">ApigeeEnvironmentClientIpResolutionConfigOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig"></a>

```python
node_config: ApigeeEnvironmentNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.properties"></a>

```python
properties: ApigeeEnvironmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference">ApigeeEnvironmentPropertiesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a>

---

##### `api_proxy_type_input`<sup>Optional</sup> <a name="api_proxy_type_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput"></a>

```python
api_proxy_type_input: str
```

- *Type:* str

---

##### `client_ip_resolution_config_input`<sup>Optional</sup> <a name="client_ip_resolution_config_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfigInput"></a>

```python
client_ip_resolution_config_input: ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `forward_proxy_uri_input`<sup>Optional</sup> <a name="forward_proxy_uri_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUriInput"></a>

```python
forward_proxy_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput"></a>

```python
node_config_input: ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.propertiesInput"></a>

```python
properties_input: ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_proxy_type`<sup>Required</sup> <a name="api_proxy_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType"></a>

```python
api_proxy_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `forward_proxy_uri`<sup>Required</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUri"></a>

```python
forward_proxy_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentClientIpResolutionConfig <a name="ApigeeEnvironmentClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig(
  header_index_algorithm: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.property.headerIndexAlgorithm">header_index_algorithm</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | header_index_algorithm block. |

---

##### `header_index_algorithm`<sup>Optional</sup> <a name="header_index_algorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.property.headerIndexAlgorithm"></a>

```python
header_index_algorithm: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

header_index_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#header_index_algorithm ApigeeEnvironment#header_index_algorithm}

---

### ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm <a name="ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm(
  ip_header_index: typing.Union[int, float],
  ip_header_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderIndex">ip_header_index</a></code> | <code>typing.Union[int, float]</code> | The index of the ip in the header. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderName">ip_header_name</a></code> | <code>str</code> | The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header. |

---

##### `ip_header_index`<sup>Required</sup> <a name="ip_header_index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderIndex"></a>

```python
ip_header_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the ip in the header.

Positive indices 0, 1, 2, 3 chooses indices from the left (first ips). Negative indices -1, -2, -3 chooses indices from the right (last ips).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#ip_header_index ApigeeEnvironment#ip_header_index}

---

##### `ip_header_name`<sup>Required</sup> <a name="ip_header_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderName"></a>

```python
ip_header_name: str
```

- *Type:* str

The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#ip_header_name ApigeeEnvironment#ip_header_name}

---

### ApigeeEnvironmentConfig <a name="ApigeeEnvironmentConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  org_id: str,
  api_proxy_type: str = None,
  client_ip_resolution_config: ApigeeEnvironmentClientIpResolutionConfig = None,
  deployment_type: str = None,
  description: str = None,
  display_name: str = None,
  forward_proxy_uri: str = None,
  id: str = None,
  node_config: ApigeeEnvironmentNodeConfig = None,
  properties: ApigeeEnvironmentProperties = None,
  timeouts: ApigeeEnvironmentTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType">api_proxy_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.clientIpResolutionConfig">client_ip_resolution_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | client_ip_resolution_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.type">type</a></code> | <code>str</code> | Types that can be selected for an Environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#org_id ApigeeEnvironment#org_id}

---

##### `api_proxy_type`<sup>Optional</sup> <a name="api_proxy_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType"></a>

```python
api_proxy_type: str
```

- *Type:* str

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#api_proxy_type ApigeeEnvironment#api_proxy_type}

---

##### `client_ip_resolution_config`<sup>Optional</sup> <a name="client_ip_resolution_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.clientIpResolutionConfig"></a>

```python
client_ip_resolution_config: ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

client_ip_resolution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#client_ip_resolution_config ApigeeEnvironment#client_ip_resolution_config}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#deployment_type ApigeeEnvironment#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#description ApigeeEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#display_name ApigeeEnvironment#display_name}

---

##### `forward_proxy_uri`<sup>Optional</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forwardProxyUri"></a>

```python
forward_proxy_uri: str
```

- *Type:* str

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#forward_proxy_uri ApigeeEnvironment#forward_proxy_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig"></a>

```python
node_config: ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#node_config ApigeeEnvironment#node_config}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.properties"></a>

```python
properties: ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#properties ApigeeEnvironment#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#timeouts ApigeeEnvironment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#type ApigeeEnvironment#type}

---

### ApigeeEnvironmentNodeConfig <a name="ApigeeEnvironmentNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentNodeConfig(
  max_node_count: str = None,
  min_node_count: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount">max_node_count</a></code> | <code>str</code> | The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount">min_node_count</a></code> | <code>str</code> | The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. |

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount"></a>

```python
max_node_count: str
```

- *Type:* str

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#max_node_count ApigeeEnvironment#max_node_count}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount"></a>

```python
min_node_count: str
```

- *Type:* str

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#min_node_count ApigeeEnvironment#min_node_count}

---

### ApigeeEnvironmentProperties <a name="ApigeeEnvironmentProperties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentProperties(
  property: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.property.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]</code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.property.property"></a>

```python
property: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#property ApigeeEnvironment#property}

---

### ApigeeEnvironmentPropertiesProperty <a name="ApigeeEnvironmentPropertiesProperty" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentPropertiesProperty(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.name">name</a></code> | <code>str</code> | The property key. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.value">value</a></code> | <code>str</code> | The property value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.name"></a>

```python
name: str
```

- *Type:* str

The property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.value"></a>

```python
value: str
```

- *Type:* str

The property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#value ApigeeEnvironment#value}

---

### ApigeeEnvironmentTimeouts <a name="ApigeeEnvironmentTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#create ApigeeEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#update ApigeeEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#create ApigeeEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#update ApigeeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference <a name="ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndexInput">ip_header_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderNameInput">ip_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndex">ip_header_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderName">ip_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_header_index_input`<sup>Optional</sup> <a name="ip_header_index_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndexInput"></a>

```python
ip_header_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_header_name_input`<sup>Optional</sup> <a name="ip_header_name_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderNameInput"></a>

```python
ip_header_name_input: str
```

- *Type:* str

---

##### `ip_header_index`<sup>Required</sup> <a name="ip_header_index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndex"></a>

```python
ip_header_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_header_name`<sup>Required</sup> <a name="ip_header_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderName"></a>

```python
ip_header_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

---


### ApigeeEnvironmentClientIpResolutionConfigOutputReference <a name="ApigeeEnvironmentClientIpResolutionConfigOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm">put_header_index_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resetHeaderIndexAlgorithm">reset_header_index_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_index_algorithm` <a name="put_header_index_algorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm"></a>

```python
def put_header_index_algorithm(
  ip_header_index: typing.Union[int, float],
  ip_header_name: str
) -> None
```

###### `ip_header_index`<sup>Required</sup> <a name="ip_header_index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm.parameter.ipHeaderIndex"></a>

- *Type:* typing.Union[int, float]

The index of the ip in the header.

Positive indices 0, 1, 2, 3 chooses indices from the left (first ips). Negative indices -1, -2, -3 chooses indices from the right (last ips).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#ip_header_index ApigeeEnvironment#ip_header_index}

---

###### `ip_header_name`<sup>Required</sup> <a name="ip_header_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm.parameter.ipHeaderName"></a>

- *Type:* str

The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/apigee_environment#ip_header_name ApigeeEnvironment#ip_header_name}

---

##### `reset_header_index_algorithm` <a name="reset_header_index_algorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resetHeaderIndexAlgorithm"></a>

```python
def reset_header_index_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithm">header_index_algorithm</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithmInput">header_index_algorithm_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_index_algorithm`<sup>Required</sup> <a name="header_index_algorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithm"></a>

```python
header_index_algorithm: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference</a>

---

##### `header_index_algorithm_input`<sup>Optional</sup> <a name="header_index_algorithm_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithmInput"></a>

```python
header_index_algorithm_input: ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

---


### ApigeeEnvironmentNodeConfigOutputReference <a name="ApigeeEnvironmentNodeConfigOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount">current_aggregate_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_aggregate_node_count`<sup>Required</sup> <a name="current_aggregate_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount"></a>

```python
current_aggregate_node_count: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: str
```

- *Type:* str

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: str
```

- *Type:* str

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---


### ApigeeEnvironmentPropertiesOutputReference <a name="ApigeeEnvironmentPropertiesOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty">put_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resetProperty">reset_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_property` <a name="put_property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty"></a>

```python
def put_property(
  value: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]

---

##### `reset_property` <a name="reset_property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resetProperty"></a>

```python
def reset_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.property">property</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList">ApigeeEnvironmentPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.propertyInput">property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.property"></a>

```python
property: ApigeeEnvironmentPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList">ApigeeEnvironmentPropertiesPropertyList</a>

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.propertyInput"></a>

```python
property_input: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

---


### ApigeeEnvironmentPropertiesPropertyList <a name="ApigeeEnvironmentPropertiesPropertyList" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeEnvironmentPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeEnvironmentPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]]

---


### ApigeeEnvironmentPropertiesPropertyOutputReference <a name="ApigeeEnvironmentPropertiesPropertyOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeEnvironmentPropertiesProperty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty">ApigeeEnvironmentPropertiesProperty</a>]

---


### ApigeeEnvironmentTimeoutsOutputReference <a name="ApigeeEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_environment

apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>]

---



