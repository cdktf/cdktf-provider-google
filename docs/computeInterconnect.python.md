# `computeInterconnect` Submodule <a name="`computeInterconnect` Submodule" id="@cdktf/provider-google.computeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnect <a name="ComputeInterconnect" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_name: str,
  interconnect_type: str,
  link_type: str,
  location: str,
  name: str,
  requested_link_count: typing.Union[int, float],
  admin_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  macsec: ComputeInterconnectMacsec = None,
  macsec_enabled: typing.Union[bool, IResolvable] = None,
  noc_contact_email: str = None,
  project: str = None,
  remote_location: str = None,
  requested_features: typing.List[str] = None,
  timeouts: ComputeInterconnectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.customerName">customer_name</a></code> | <code>str</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.interconnectType">interconnect_type</a></code> | <code>str</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.linkType">link_type</a></code> | <code>str</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.location">location</a></code> | <code>str</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.remoteLocation">remote_location</a></code> | <code>str</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"]. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.customerName"></a>

- *Type:* str

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.interconnectType"></a>

- *Type:* str

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.linkType"></a>

- *Type:* str

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.location"></a>

- *Type:* str

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#location ComputeInterconnect#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.requestedLinkCount"></a>

- *Type:* typing.Union[int, float]

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#description ComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.macsec"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}

---

##### `macsec_enabled`<sup>Optional</sup> <a name="macsec_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.macsecEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}

---

##### `noc_contact_email`<sup>Optional</sup> <a name="noc_contact_email" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.nocContactEmail"></a>

- *Type:* str

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}.

---

##### `remote_location`<sup>Optional</sup> <a name="remote_location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.remoteLocation"></a>

- *Type:* str

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}

---

##### `requested_features`<sup>Optional</sup> <a name="requested_features" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.requestedFeatures"></a>

- *Type:* typing.List[str]

interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec">put_macsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec">reset_macsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled">reset_macsec_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail">reset_noc_contact_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation">reset_remote_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures">reset_requested_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_macsec` <a name="put_macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec"></a>

```python
def put_macsec(
  pre_shared_keys: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
) -> None
```

###### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec.parameter.preSharedKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}.

---

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_macsec` <a name="reset_macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec"></a>

```python
def reset_macsec() -> None
```

##### `reset_macsec_enabled` <a name="reset_macsec_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled"></a>

```python
def reset_macsec_enabled() -> None
```

##### `reset_noc_contact_email` <a name="reset_noc_contact_email" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail"></a>

```python
def reset_noc_contact_email() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remote_location` <a name="reset_remote_location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation"></a>

```python
def reset_remote_location() -> None
```

##### `reset_requested_features` <a name="reset_requested_features" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures"></a>

```python
def reset_requested_features() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnect.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInterconnect to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures">available_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos">circuit_infos</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages">expected_outages</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress">google_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId">google_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments">interconnect_attachments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus">operational_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount">provisioned_link_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput">customer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput">interconnect_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput">link_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput">macsec_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput">macsec_input</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput">noc_contact_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput">remote_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput">requested_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput">requested_link_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName">customer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType">interconnect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType">link_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation">remote_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_features`<sup>Required</sup> <a name="available_features" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures"></a>

```python
available_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `circuit_infos`<sup>Required</sup> <a name="circuit_infos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos"></a>

```python
circuit_infos: ComputeInterconnectCircuitInfosList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expected_outages`<sup>Required</sup> <a name="expected_outages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages"></a>

```python
expected_outages: ComputeInterconnectExpectedOutagesList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a>

---

##### `google_ip_address`<sup>Required</sup> <a name="google_ip_address" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress"></a>

```python
google_ip_address: str
```

- *Type:* str

---

##### `google_reference_id`<sup>Required</sup> <a name="google_reference_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId"></a>

```python
google_reference_id: str
```

- *Type:* str

---

##### `interconnect_attachments`<sup>Required</sup> <a name="interconnect_attachments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments"></a>

```python
interconnect_attachments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `macsec`<sup>Required</sup> <a name="macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec"></a>

```python
macsec: ComputeInterconnectMacsecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a>

---

##### `operational_status`<sup>Required</sup> <a name="operational_status" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus"></a>

```python
operational_status: str
```

- *Type:* str

---

##### `peer_ip_address`<sup>Required</sup> <a name="peer_ip_address" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress"></a>

```python
peer_ip_address: str
```

- *Type:* str

---

##### `provisioned_link_count`<sup>Required</sup> <a name="provisioned_link_count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount"></a>

```python
provisioned_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts"></a>

```python
timeouts: ComputeInterconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a>

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_name_input`<sup>Optional</sup> <a name="customer_name_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput"></a>

```python
customer_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_type_input`<sup>Optional</sup> <a name="interconnect_type_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput"></a>

```python
interconnect_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `link_type_input`<sup>Optional</sup> <a name="link_type_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput"></a>

```python
link_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `macsec_enabled_input`<sup>Optional</sup> <a name="macsec_enabled_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput"></a>

```python
macsec_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_input`<sup>Optional</sup> <a name="macsec_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput"></a>

```python
macsec_input: ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `noc_contact_email_input`<sup>Optional</sup> <a name="noc_contact_email_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput"></a>

```python
noc_contact_email_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_location_input`<sup>Optional</sup> <a name="remote_location_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput"></a>

```python
remote_location_input: str
```

- *Type:* str

---

##### `requested_features_input`<sup>Optional</sup> <a name="requested_features_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput"></a>

```python
requested_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_link_count_input`<sup>Optional</sup> <a name="requested_link_count_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput"></a>

```python
requested_link_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInterconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>]

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType"></a>

```python
interconnect_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType"></a>

```python
link_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `macsec_enabled`<sup>Required</sup> <a name="macsec_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled"></a>

```python
macsec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `noc_contact_email`<sup>Required</sup> <a name="noc_contact_email" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail"></a>

```python
noc_contact_email: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remote_location`<sup>Required</sup> <a name="remote_location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation"></a>

```python
remote_location: str
```

- *Type:* str

---

##### `requested_features`<sup>Required</sup> <a name="requested_features" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures"></a>

```python
requested_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount"></a>

```python
requested_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectCircuitInfos <a name="ComputeInterconnectCircuitInfos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectCircuitInfos()
```


### ComputeInterconnectConfig <a name="ComputeInterconnectConfig" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_name: str,
  interconnect_type: str,
  link_type: str,
  location: str,
  name: str,
  requested_link_count: typing.Union[int, float],
  admin_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  macsec: ComputeInterconnectMacsec = None,
  macsec_enabled: typing.Union[bool, IResolvable] = None,
  noc_contact_email: str = None,
  project: str = None,
  remote_location: str = None,
  requested_features: typing.List[str] = None,
  timeouts: ComputeInterconnectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName">customer_name</a></code> | <code>str</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType">interconnect_type</a></code> | <code>str</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType">link_type</a></code> | <code>str</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location">location</a></code> | <code>str</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation">remote_location</a></code> | <code>str</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"]. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType"></a>

```python
interconnect_type: str
```

- *Type:* str

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType"></a>

```python
link_type: str
```

- *Type:* str

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#location ComputeInterconnect#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount"></a>

```python
requested_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#description ComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec"></a>

```python
macsec: ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}

---

##### `macsec_enabled`<sup>Optional</sup> <a name="macsec_enabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled"></a>

```python
macsec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}

---

##### `noc_contact_email`<sup>Optional</sup> <a name="noc_contact_email" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail"></a>

```python
noc_contact_email: str
```

- *Type:* str

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}.

---

##### `remote_location`<sup>Optional</sup> <a name="remote_location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation"></a>

```python
remote_location: str
```

- *Type:* str

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}

---

##### `requested_features`<sup>Optional</sup> <a name="requested_features" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures"></a>

```python
requested_features: typing.List[str]
```

- *Type:* typing.List[str]

interconnects.list of features requested for this Interconnect connection. Options: MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Possible values: ["MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts"></a>

```python
timeouts: ComputeInterconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}

---

### ComputeInterconnectExpectedOutages <a name="ComputeInterconnectExpectedOutages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectExpectedOutages()
```


### ComputeInterconnectMacsec <a name="ComputeInterconnectMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectMacsec(
  pre_shared_keys: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys">pre_shared_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]</code> | pre_shared_keys block. |

---

##### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys"></a>

```python
pre_shared_keys: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}

---

### ComputeInterconnectMacsecPreSharedKeys <a name="ComputeInterconnectMacsecPreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectMacsecPreSharedKeys(
  name: str,
  fail_open: typing.Union[bool, IResolvable] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name">name</a></code> | <code>str</code> | A name for this pre-shared key. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime">start_time</a></code> | <code>str</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```python
name: str
```

- *Type:* str

A name for this pre-shared key.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#start_time ComputeInterconnect#start_time}

---

### ComputeInterconnectTimeouts <a name="ComputeInterconnectTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectCircuitInfosList <a name="ComputeInterconnectCircuitInfosList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectCircuitInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectCircuitInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectCircuitInfosOutputReference <a name="ComputeInterconnectCircuitInfosOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectCircuitInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">customer_demarc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">google_circuit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">google_demarc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_demarc_id`<sup>Required</sup> <a name="customer_demarc_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```python
customer_demarc_id: str
```

- *Type:* str

---

##### `google_circuit_id`<sup>Required</sup> <a name="google_circuit_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```python
google_circuit_id: str
```

- *Type:* str

---

##### `google_demarc_id`<sup>Required</sup> <a name="google_demarc_id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```python
google_demarc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectCircuitInfos
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a>

---


### ComputeInterconnectExpectedOutagesList <a name="ComputeInterconnectExpectedOutagesList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectExpectedOutagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectExpectedOutagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectExpectedOutagesOutputReference <a name="ComputeInterconnectExpectedOutagesOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">affected_circuits</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `affected_circuits`<sup>Required</sup> <a name="affected_circuits" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```python
affected_circuits: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectExpectedOutages
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a>

---


### ComputeInterconnectMacsecOutputReference <a name="ComputeInterconnectMacsecOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectMacsecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys">put_pre_shared_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pre_shared_keys` <a name="put_pre_shared_keys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```python
def put_pre_shared_keys(
  value: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys">pre_shared_keys</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">pre_shared_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```python
pre_shared_keys: ComputeInterconnectMacsecPreSharedKeysList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `pre_shared_keys_input`<sup>Optional</sup> <a name="pre_shared_keys_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```python
pre_shared_keys_input: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---


### ComputeInterconnectMacsecPreSharedKeysList <a name="ComputeInterconnectMacsecPreSharedKeysList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectMacsecPreSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]]

---


### ComputeInterconnectMacsecPreSharedKeysOutputReference <a name="ComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInterconnectMacsecPreSharedKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>]

---


### ComputeInterconnectTimeoutsOutputReference <a name="ComputeInterconnectTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect

computeInterconnect.ComputeInterconnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInterconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>]

---



