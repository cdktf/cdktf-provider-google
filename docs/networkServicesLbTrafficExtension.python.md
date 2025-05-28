# `networkServicesLbTrafficExtension` Submodule <a name="`networkServicesLbTrafficExtension` Submodule" id="@cdktf/provider-google.networkServicesLbTrafficExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbTrafficExtension <a name="NetworkServicesLbTrafficExtension" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension google_network_services_lb_traffic_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  project: str = None,
  timeouts: NetworkServicesLbTrafficExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#extension_chains NetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#forwarding_rules NetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#location NetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#description NetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#labels NetworkServicesLbTrafficExtension#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#load_balancing_scheme NetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#timeouts NetworkServicesLbTrafficExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains">put_extension_chains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_chains` <a name="put_extension_chains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains"></a>

```python
def put_extension_chains(
  value: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesLbTrafficExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesLbTrafficExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbTrafficExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChains">extension_chains</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList">NetworkServicesLbTrafficExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference">NetworkServicesLbTrafficExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChainsInput">extension_chains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRulesInput">forwarding_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChains"></a>

```python
extension_chains: NetworkServicesLbTrafficExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList">NetworkServicesLbTrafficExtensionExtensionChainsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeouts"></a>

```python
timeouts: NetworkServicesLbTrafficExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference">NetworkServicesLbTrafficExtensionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_chains_input`<sup>Optional</sup> <a name="extension_chains_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChainsInput"></a>

```python
extension_chains_input: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]

---

##### `forwarding_rules_input`<sup>Optional</sup> <a name="forwarding_rules_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRulesInput"></a>

```python
forwarding_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesLbTrafficExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbTrafficExtensionConfig <a name="NetworkServicesLbTrafficExtensionConfig" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  project: str = None,
  timeouts: NetworkServicesLbTrafficExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.extensionChains"></a>

```python
extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#extension_chains NetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#forwarding_rules NetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#location NetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#description NetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#labels NetworkServicesLbTrafficExtension#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#load_balancing_scheme NetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesLbTrafficExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#timeouts NetworkServicesLbTrafficExtension#timeouts}

---

### NetworkServicesLbTrafficExtensionExtensionChains <a name="NetworkServicesLbTrafficExtensionExtensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains(
  extensions: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChainsExtensions]],
  match_condition: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.extensions">extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | extensions block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.name">name</a></code> | <code>str</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.extensions"></a>

```python
extensions: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#extensions NetworkServicesLbTrafficExtension#extensions}

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#match_condition NetworkServicesLbTrafficExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

### NetworkServicesLbTrafficExtensionExtensionChainsExtensions <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions(
  name: str,
  service: str,
  authority: str = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  forward_headers: typing.List[str] = None,
  metadata: typing.Mapping[str] = None,
  supported_events: typing.List[str] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>str</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>str</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata associated with the extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#service NetworkServicesLbTrafficExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority"></a>

```python
authority: str
```

- *Type:* str

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#authority NetworkServicesLbTrafficExtension#authority}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#fail_open NetworkServicesLbTrafficExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#forward_headers NetworkServicesLbTrafficExtension#forward_headers}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata associated with the extension.

This field is used to pass metadata to the extension service.
You can set up key value pairs for metadata as you like and need.
f.e. {"key": "value", "key2": "value2"}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#metadata NetworkServicesLbTrafficExtension#metadata}

---

##### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

A set of events during request or response processing for which this extension is called.

This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#supported_events NetworkServicesLbTrafficExtension#supported_events}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#timeout NetworkServicesLbTrafficExtension#timeout}

---

### NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition(
  cel_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression">cel_expression</a></code> | <code>str</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#cel_expression NetworkServicesLbTrafficExtension#cel_expression}

---

### NetworkServicesLbTrafficExtensionTimeouts <a name="NetworkServicesLbTrafficExtensionTimeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---


### NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority">reset_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">reset_supported_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authority` <a name="reset_authority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```python
def reset_authority() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_supported_events` <a name="reset_supported_events" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```python
def reset_supported_events() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supported_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authority_input`<sup>Optional</sup> <a name="authority_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```python
authority_input: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `supported_events_input`<sup>Optional</sup> <a name="supported_events_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```python
supported_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```python
authority: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `supported_events`<sup>Required</sup> <a name="supported_events" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbTrafficExtensionExtensionChainsExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]

---


### NetworkServicesLbTrafficExtensionExtensionChainsList <a name="NetworkServicesLbTrafficExtensionExtensionChainsList" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbTrafficExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]]

---


### NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">cel_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbTrafficExtensionExtensionChainsOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions"></a>

```python
def put_extensions(
  value: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  cel_expression: str
) -> None
```

###### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition.parameter.celExpression"></a>

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/network_services_lb_traffic_extension#cel_expression NetworkServicesLbTrafficExtension#cel_expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput">extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions"></a>

```python
extensions: NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```python
extensions_input: typing.Union[IResolvable, typing.List[NetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbTrafficExtensionExtensionChains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>]

---


### NetworkServicesLbTrafficExtensionTimeoutsOutputReference <a name="NetworkServicesLbTrafficExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_traffic_extension

networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbTrafficExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>]

---



