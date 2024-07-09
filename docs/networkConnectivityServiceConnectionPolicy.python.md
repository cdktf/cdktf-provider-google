# `networkConnectivityServiceConnectionPolicy` Submodule <a name="`networkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityServiceConnectionPolicy <a name="NetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  service_class: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_config: NetworkConnectivityServiceConnectionPolicyPscConfig = None,
  timeouts: NetworkConnectivityServiceConnectionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network">network</a></code> | <code>str</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass">service_class</a></code> | <code>str</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#location NetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#name NetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network"></a>

- *Type:* str

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#network NetworkConnectivityServiceConnectionPolicy#network}

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass"></a>

- *Type:* str

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#service_class NetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description"></a>

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#description NetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#labels NetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#psc_config NetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#timeouts NetworkConnectivityServiceConnectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig">put_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetPscConfig">reset_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_psc_config` <a name="put_psc_config" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```python
def put_psc_config(
  subnetworks: typing.List[str],
  limit: str = None
) -> None
```

###### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.subnetworks"></a>

- *Type:* typing.List[str]

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#subnetworks NetworkConnectivityServiceConnectionPolicy#subnetworks}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.limit"></a>

- *Type:* str

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#limit NetworkConnectivityServiceConnectionPolicy#limit}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_config` <a name="reset_psc_config" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```python
def reset_psc_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityServiceConnectionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityServiceConnectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityServiceConnectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.infrastructure">infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConnections">psc_connections</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList">NetworkConnectivityServiceConnectionPolicyPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">psc_config_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">service_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClass">service_class</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```python
infrastructure: str
```

- *Type:* str

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```python
psc_config: NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `psc_connections`<sup>Required</sup> <a name="psc_connections" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```python
psc_connections: NetworkConnectivityServiceConnectionPolicyPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList">NetworkConnectivityServiceConnectionPolicyPscConnectionsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```python
timeouts: NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_config_input`<sup>Optional</sup> <a name="psc_config_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```python
psc_config_input: NetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `service_class_input`<sup>Optional</sup> <a name="service_class_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```python
service_class_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkConnectivityServiceConnectionPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```python
service_class: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityServiceConnectionPolicyConfig <a name="NetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  service_class: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_config: NetworkConnectivityServiceConnectionPolicyPscConfig = None,
  timeouts: NetworkConnectivityServiceConnectionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.network">network</a></code> | <code>str</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">service_class</a></code> | <code>str</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#location NetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#name NetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#network NetworkConnectivityServiceConnectionPolicy#network}

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```python
service_class: str
```

- *Type:* str

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#service_class NetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#description NetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#labels NetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```python
psc_config: NetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#psc_config NetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityServiceConnectionPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#timeouts NetworkConnectivityServiceConnectionPolicy#timeouts}

---

### NetworkConnectivityServiceConnectionPolicyPscConfig <a name="NetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig(
  subnetworks: typing.List[str],
  limit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">subnetworks</a></code> | <code>typing.List[str]</code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">limit</a></code> | <code>str</code> | Max number of PSC connections for this policy. |

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```python
subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#subnetworks NetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```python
limit: str
```

- *Type:* str

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#limit NetworkConnectivityServiceConnectionPolicy#limit}

---

### NetworkConnectivityServiceConnectionPolicyPscConnections <a name="NetworkConnectivityServiceConnectionPolicyPscConnections" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections()
```


### NetworkConnectivityServiceConnectionPolicyPscConnectionsError <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsError" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError()
```


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo()
```


### NetworkConnectivityServiceConnectionPolicyTimeouts <a name="NetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">reset_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `subnetworks_input`<sup>Optional</sup> <a name="subnetworks_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```python
subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```python
subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError">NetworkConnectivityServiceConnectionPolicyPscConnectionsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityServiceConnectionPolicyPscConnectionsError
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError">NetworkConnectivityServiceConnectionPolicyPscConnectionsError</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress">consumer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule">consumer_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject">consumer_target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo">error_info</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType">error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation">gce_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections">NetworkConnectivityServiceConnectionPolicyPscConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_address`<sup>Required</sup> <a name="consumer_address" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress"></a>

```python
consumer_address: str
```

- *Type:* str

---

##### `consumer_forwarding_rule`<sup>Required</sup> <a name="consumer_forwarding_rule" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule"></a>

```python
consumer_forwarding_rule: str
```

- *Type:* str

---

##### `consumer_target_project`<sup>Required</sup> <a name="consumer_target_project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject"></a>

```python
consumer_target_project: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error"></a>

```python
error: NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a>

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo"></a>

```python
error_info: NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a>

---

##### `error_type`<sup>Required</sup> <a name="error_type" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

---

##### `gce_operation`<sup>Required</sup> <a name="gce_operation" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation"></a>

```python
gce_operation: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityServiceConnectionPolicyPscConnections
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections">NetworkConnectivityServiceConnectionPolicyPscConnections</a>

---


### NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_service_connection_policy

networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkConnectivityServiceConnectionPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>]

---



