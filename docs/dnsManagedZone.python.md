# `dnsManagedZone` Submodule <a name="`dnsManagedZone` Submodule" id="@cdktf/provider-google.dnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZone <a name="DnsManagedZone" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_name: str,
  name: str,
  cloud_logging_config: DnsManagedZoneCloudLoggingConfig = None,
  description: str = None,
  dnssec_config: DnsManagedZoneDnssecConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  forwarding_config: DnsManagedZoneForwardingConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  peering_config: DnsManagedZonePeeringConfig = None,
  private_visibility_config: DnsManagedZonePrivateVisibilityConfig = None,
  project: str = None,
  timeouts: DnsManagedZoneTimeouts = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnsName">dns_name</a></code> | <code>str</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.name">name</a></code> | <code>str</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnsName"></a>

- *Type:* str

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.name"></a>

- *Type:* str

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#name DnsManagedZone#name}

---

##### `cloud_logging_config`<sup>Optional</sup> <a name="cloud_logging_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.cloudLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.description"></a>

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#description DnsManagedZone#description}

---

##### `dnssec_config`<sup>Optional</sup> <a name="dnssec_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnssecConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `forwarding_config`<sup>Optional</sup> <a name="forwarding_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forwardingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `peering_config`<sup>Optional</sup> <a name="peering_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.peeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `private_visibility_config`<sup>Optional</sup> <a name="private_visibility_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.privateVisibilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.visibility"></a>

- *Type:* str

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#visibility DnsManagedZone#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig">put_cloud_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig">put_dnssec_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig">put_forwarding_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig">put_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig">put_private_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig">reset_cloud_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig">reset_dnssec_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig">reset_forwarding_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig">reset_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig">reset_private_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_logging_config` <a name="put_cloud_logging_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig"></a>

```python
def put_cloud_logging_config(
  enable_logging: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#enable_logging DnsManagedZone#enable_logging}

---

##### `put_dnssec_config` <a name="put_dnssec_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig"></a>

```python
def put_dnssec_config(
  default_key_specs: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]] = None,
  kind: str = None,
  non_existence: str = None,
  state: str = None
) -> None
```

###### `default_key_specs`<sup>Optional</sup> <a name="default_key_specs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.defaultKeySpecs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#default_key_specs DnsManagedZone#default_key_specs}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.kind"></a>

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

###### `non_existence`<sup>Optional</sup> <a name="non_existence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.nonExistence"></a>

- *Type:* str

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#non_existence DnsManagedZone#non_existence}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.state"></a>

- *Type:* str

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#state DnsManagedZone#state}

---

##### `put_forwarding_config` <a name="put_forwarding_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig"></a>

```python
def put_forwarding_config(
  target_name_servers: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
) -> None
```

###### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig.parameter.targetNameServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#target_name_servers DnsManagedZone#target_name_servers}

---

##### `put_peering_config` <a name="put_peering_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig"></a>

```python
def put_peering_config(
  target_network: DnsManagedZonePeeringConfigTargetNetwork
) -> None
```

###### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig.parameter.targetNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#target_network DnsManagedZone#target_network}

---

##### `put_private_visibility_config` <a name="put_private_visibility_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig"></a>

```python
def put_private_visibility_config(
  gke_clusters: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]] = None,
  networks: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]] = None
) -> None
```

###### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig.parameter.gkeClusters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#gke_clusters DnsManagedZone#gke_clusters}

---

###### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#networks DnsManagedZone#networks}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}.

---

##### `reset_cloud_logging_config` <a name="reset_cloud_logging_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig"></a>

```python
def reset_cloud_logging_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dnssec_config` <a name="reset_dnssec_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig"></a>

```python
def reset_dnssec_config() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_forwarding_config` <a name="reset_forwarding_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig"></a>

```python
def reset_forwarding_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_peering_config` <a name="reset_peering_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig"></a>

```python
def reset_peering_config() -> None
```

##### `reset_private_visibility_config` <a name="reset_private_visibility_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig"></a>

```python
def reset_private_visibility_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsManagedZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId">managed_zone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput">cloud_logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput">dnssec_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput">forwarding_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput">peering_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput">private_visibility_config_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_logging_config`<sup>Required</sup> <a name="cloud_logging_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig"></a>

```python
cloud_logging_config: DnsManagedZoneCloudLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `dnssec_config`<sup>Required</sup> <a name="dnssec_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig"></a>

```python
dnssec_config: DnsManagedZoneDnssecConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `forwarding_config`<sup>Required</sup> <a name="forwarding_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig"></a>

```python
forwarding_config: DnsManagedZoneForwardingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a>

---

##### `managed_zone_id`<sup>Required</sup> <a name="managed_zone_id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId"></a>

```python
managed_zone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering_config`<sup>Required</sup> <a name="peering_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig"></a>

```python
peering_config: DnsManagedZonePeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a>

---

##### `private_visibility_config`<sup>Required</sup> <a name="private_visibility_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig"></a>

```python
private_visibility_config: DnsManagedZonePrivateVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts"></a>

```python
timeouts: DnsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a>

---

##### `cloud_logging_config_input`<sup>Optional</sup> <a name="cloud_logging_config_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput"></a>

```python
cloud_logging_config_input: DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `dnssec_config_input`<sup>Optional</sup> <a name="dnssec_config_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput"></a>

```python
dnssec_config_input: DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarding_config_input`<sup>Optional</sup> <a name="forwarding_config_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput"></a>

```python
forwarding_config_input: DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peering_config_input`<sup>Optional</sup> <a name="peering_config_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput"></a>

```python
peering_config_input: DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `private_visibility_config_input`<sup>Optional</sup> <a name="private_visibility_config_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput"></a>

```python
private_visibility_config_input: DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneCloudLoggingConfig <a name="DnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneCloudLoggingConfig(
  enable_logging: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#enable_logging DnsManagedZone#enable_logging}

---

### DnsManagedZoneConfig <a name="DnsManagedZoneConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_name: str,
  name: str,
  cloud_logging_config: DnsManagedZoneCloudLoggingConfig = None,
  description: str = None,
  dnssec_config: DnsManagedZoneDnssecConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  forwarding_config: DnsManagedZoneForwardingConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  peering_config: DnsManagedZonePeeringConfig = None,
  private_visibility_config: DnsManagedZonePrivateVisibilityConfig = None,
  project: str = None,
  timeouts: DnsManagedZoneTimeouts = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName">dns_name</a></code> | <code>str</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name">name</a></code> | <code>str</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility">visibility</a></code> | <code>str</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#name DnsManagedZone#name}

---

##### `cloud_logging_config`<sup>Optional</sup> <a name="cloud_logging_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```python
cloud_logging_config: DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#description DnsManagedZone#description}

---

##### `dnssec_config`<sup>Optional</sup> <a name="dnssec_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig"></a>

```python
dnssec_config: DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `forwarding_config`<sup>Optional</sup> <a name="forwarding_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig"></a>

```python
forwarding_config: DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `peering_config`<sup>Optional</sup> <a name="peering_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig"></a>

```python
peering_config: DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `private_visibility_config`<sup>Optional</sup> <a name="private_visibility_config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```python
private_visibility_config: DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts"></a>

```python
timeouts: DnsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#visibility DnsManagedZone#visibility}

---

### DnsManagedZoneDnssecConfig <a name="DnsManagedZoneDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneDnssecConfig(
  default_key_specs: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]] = None,
  kind: str = None,
  non_existence: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs">default_key_specs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind">kind</a></code> | <code>str</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence">non_existence</a></code> | <code>str</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state">state</a></code> | <code>str</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `default_key_specs`<sup>Optional</sup> <a name="default_key_specs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```python
default_key_specs: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#default_key_specs DnsManagedZone#default_key_specs}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

##### `non_existence`<sup>Optional</sup> <a name="non_existence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence"></a>

```python
non_existence: str
```

- *Type:* str

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#non_existence DnsManagedZone#non_existence}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#state DnsManagedZone#state}

---

### DnsManagedZoneDnssecConfigDefaultKeySpecs <a name="DnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs(
  algorithm: str = None,
  key_length: typing.Union[int, float] = None,
  key_type: str = None,
  kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">algorithm</a></code> | <code>str</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">key_length</a></code> | <code>typing.Union[int, float]</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">key_type</a></code> | <code>str</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">kind</a></code> | <code>str</code> | Identifies what kind of resource this is. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#algorithm DnsManagedZone#algorithm}

---

##### `key_length`<sup>Optional</sup> <a name="key_length" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```python
key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#key_length DnsManagedZone#key_length}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#key_type DnsManagedZone#key_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```python
kind: str
```

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

### DnsManagedZoneForwardingConfig <a name="DnsManagedZoneForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneForwardingConfig(
  target_name_servers: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers">target_name_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | target_name_servers block. |

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```python
target_name_servers: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#target_name_servers DnsManagedZone#target_name_servers}

---

### DnsManagedZoneForwardingConfigTargetNameServers <a name="DnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers(
  ipv4_address: str,
  forwarding_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#ipv4_address DnsManagedZone#ipv4_address}

---

##### `forwarding_path`<sup>Optional</sup> <a name="forwarding_path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#forwarding_path DnsManagedZone#forwarding_path}

---

### DnsManagedZonePeeringConfig <a name="DnsManagedZonePeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePeeringConfig(
  target_network: DnsManagedZonePeeringConfigTargetNetwork
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork">target_network</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork"></a>

```python
target_network: DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#target_network DnsManagedZone#target_network}

---

### DnsManagedZonePeeringConfigTargetNetwork <a name="DnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZonePrivateVisibilityConfig <a name="DnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfig(
  gke_clusters: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]] = None,
  networks: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters">gke_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | networks block. |

---

##### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```python
gke_clusters: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#gke_clusters DnsManagedZone#gke_clusters}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#networks DnsManagedZone#networks}

---

### DnsManagedZonePrivateVisibilityConfigGkeClusters <a name="DnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters(
  gke_cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#gke_cluster_name DnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsManagedZonePrivateVisibilityConfigNetworks <a name="DnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZoneTimeouts <a name="DnsManagedZoneTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneCloudLoggingConfigOutputReference <a name="DnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">reset_key_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">reset_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_key_length` <a name="reset_key_length" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```python
def reset_key_length() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">key_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">key_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `key_length_input`<sup>Optional</sup> <a name="key_length_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```python
key_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `key_length`<sup>Required</sup> <a name="key_length" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```python
key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsManagedZoneDnssecConfigDefaultKeySpecs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]

---


### DnsManagedZoneDnssecConfigOutputReference <a name="DnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">put_default_key_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">reset_default_key_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence">reset_non_existence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_key_specs` <a name="put_default_key_specs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```python
def put_default_key_specs(
  value: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---

##### `reset_default_key_specs` <a name="reset_default_key_specs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```python
def reset_default_key_specs() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_non_existence` <a name="reset_non_existence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```python
def reset_non_existence() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">default_key_specs</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">default_key_specs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">non_existence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence">non_existence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_key_specs`<sup>Required</sup> <a name="default_key_specs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```python
default_key_specs: DnsManagedZoneDnssecConfigDefaultKeySpecsList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `default_key_specs_input`<sup>Optional</sup> <a name="default_key_specs_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```python
default_key_specs_input: typing.Union[IResolvable, typing.List[DnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `non_existence_input`<sup>Optional</sup> <a name="non_existence_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```python
non_existence_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `non_existence`<sup>Required</sup> <a name="non_existence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```python
non_existence: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---


### DnsManagedZoneForwardingConfigOutputReference <a name="DnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">put_target_name_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_name_servers` <a name="put_target_name_servers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```python
def put_target_name_servers(
  value: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">target_name_servers</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">target_name_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```python
target_name_servers: DnsManagedZoneForwardingConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `target_name_servers_input`<sup>Optional</sup> <a name="target_name_servers_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```python
target_name_servers_input: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---


### DnsManagedZoneForwardingConfigTargetNameServersList <a name="DnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]]

---


### DnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="DnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">reset_forwarding_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarding_path` <a name="reset_forwarding_path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```python
def reset_forwarding_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">forwarding_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarding_path_input`<sup>Optional</sup> <a name="forwarding_path_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```python
forwarding_path_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `forwarding_path`<sup>Required</sup> <a name="forwarding_path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsManagedZoneForwardingConfigTargetNameServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>]

---


### DnsManagedZonePeeringConfigOutputReference <a name="DnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork">put_target_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_network` <a name="put_target_network" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```python
def put_target_network(
  network_url: str
) -> None
```

###### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.networkUrl"></a>

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork">target_network</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```python
target_network: DnsManagedZonePeeringConfigTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---


### DnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="DnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">gke_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster_name_input`<sup>Optional</sup> <a name="gke_cluster_name_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```python
gke_cluster_name_input: str
```

- *Type:* str

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsManagedZonePrivateVisibilityConfigGkeClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]

---


### DnsManagedZonePrivateVisibilityConfigNetworksList <a name="DnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---


### DnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="DnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsManagedZonePrivateVisibilityConfigNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]

---


### DnsManagedZonePrivateVisibilityConfigOutputReference <a name="DnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">put_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">reset_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">reset_networks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_clusters` <a name="put_gke_clusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```python
def put_gke_clusters(
  value: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---

##### `reset_gke_clusters` <a name="reset_gke_clusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```python
def reset_gke_clusters() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```python
def reset_networks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">gke_clusters</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">gke_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_clusters`<sup>Required</sup> <a name="gke_clusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```python
gke_clusters: DnsManagedZonePrivateVisibilityConfigGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```python
networks: DnsManagedZonePrivateVisibilityConfigNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `gke_clusters_input`<sup>Optional</sup> <a name="gke_clusters_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```python
gke_clusters_input: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[DnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---


### DnsManagedZoneTimeoutsOutputReference <a name="DnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dns_managed_zone

dnsManagedZone.DnsManagedZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>]

---



