# `apigeeOrganization` Submodule <a name="`apigeeOrganization` Submodule" id="@cdktf/provider-google.apigeeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeOrganization <a name="ApigeeOrganization" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization google_apigee_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  analytics_region: str = None,
  api_consumer_data_encryption_key_name: str = None,
  api_consumer_data_location: str = None,
  authorized_network: str = None,
  billing_type: str = None,
  control_plane_encryption_key_name: str = None,
  description: str = None,
  disable_vpc_peering: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  properties: ApigeeOrganizationProperties = None,
  retention: str = None,
  runtime_database_encryption_key_name: str = None,
  runtime_type: str = None,
  timeouts: ApigeeOrganizationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.analyticsRegion">analytics_region</a></code> | <code>str</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.apiConsumerDataEncryptionKeyName">api_consumer_data_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting API consumer data. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.apiConsumerDataLocation">api_consumer_data_location</a></code> | <code>str</code> | This field is needed only for customers using non-default data residency regions. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.authorizedNetwork">authorized_network</a></code> | <code>str</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.billingType">billing_type</a></code> | <code>str</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.controlPlaneEncryptionKeyName">control_plane_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.disableVpcPeering">disable_vpc_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#id ApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.retention">retention</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.runtimeDatabaseEncryptionKeyName">runtime_database_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.runtimeType">runtime_type</a></code> | <code>str</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.projectId"></a>

- *Type:* str

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#project_id ApigeeOrganization#project_id}

---

##### `analytics_region`<sup>Optional</sup> <a name="analytics_region" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.analyticsRegion"></a>

- *Type:* str

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#analytics_region ApigeeOrganization#analytics_region}

---

##### `api_consumer_data_encryption_key_name`<sup>Optional</sup> <a name="api_consumer_data_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.apiConsumerDataEncryptionKeyName"></a>

- *Type:* str

Cloud KMS key name used for encrypting API consumer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#api_consumer_data_encryption_key_name ApigeeOrganization#api_consumer_data_encryption_key_name}

---

##### `api_consumer_data_location`<sup>Optional</sup> <a name="api_consumer_data_location" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.apiConsumerDataLocation"></a>

- *Type:* str

This field is needed only for customers using non-default data residency regions.

Apigee stores some control plane data only in single region.
This field determines which single region Apigee should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#api_consumer_data_location ApigeeOrganization#api_consumer_data_location}

---

##### `authorized_network`<sup>Optional</sup> <a name="authorized_network" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.authorizedNetwork"></a>

- *Type:* str

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#authorized_network ApigeeOrganization#authorized_network}

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.billingType"></a>

- *Type:* str

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#billing_type ApigeeOrganization#billing_type}

---

##### `control_plane_encryption_key_name`<sup>Optional</sup> <a name="control_plane_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.controlPlaneEncryptionKeyName"></a>

- *Type:* str

Cloud KMS key name used for encrypting control plane data that is stored in a multi region.

Only used for the data residency region "US" or "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#control_plane_encryption_key_name ApigeeOrganization#control_plane_encryption_key_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.description"></a>

- *Type:* str

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#description ApigeeOrganization#description}

---

##### `disable_vpc_peering`<sup>Optional</sup> <a name="disable_vpc_peering" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.disableVpcPeering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee.

Required if an 'authorizedNetwork'
on the consumer project is not provided, in which case the flag should be set to 'true'.
Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#disable_vpc_peering ApigeeOrganization#disable_vpc_peering}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#display_name ApigeeOrganization#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#id ApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#properties ApigeeOrganization#properties}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.retention"></a>

- *Type:* str

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#retention ApigeeOrganization#retention}

---

##### `runtime_database_encryption_key_name`<sup>Optional</sup> <a name="runtime_database_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.runtimeDatabaseEncryptionKeyName"></a>

- *Type:* str

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.runtimeType"></a>

- *Type:* str

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#runtime_type ApigeeOrganization#runtime_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#timeouts ApigeeOrganization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAnalyticsRegion">reset_analytics_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetApiConsumerDataEncryptionKeyName">reset_api_consumer_data_encryption_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetApiConsumerDataLocation">reset_api_consumer_data_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAuthorizedNetwork">reset_authorized_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetBillingType">reset_billing_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetControlPlaneEncryptionKeyName">reset_control_plane_encryption_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisableVpcPeering">reset_disable_vpc_peering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName">reset_runtime_database_encryption_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeType">reset_runtime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties"></a>

```python
def put_properties(
  property: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]] = None
) -> None
```

###### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties.parameter.property"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#property ApigeeOrganization#property}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#create ApigeeOrganization#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#delete ApigeeOrganization#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#update ApigeeOrganization#update}.

---

##### `reset_analytics_region` <a name="reset_analytics_region" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAnalyticsRegion"></a>

```python
def reset_analytics_region() -> None
```

##### `reset_api_consumer_data_encryption_key_name` <a name="reset_api_consumer_data_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetApiConsumerDataEncryptionKeyName"></a>

```python
def reset_api_consumer_data_encryption_key_name() -> None
```

##### `reset_api_consumer_data_location` <a name="reset_api_consumer_data_location" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetApiConsumerDataLocation"></a>

```python
def reset_api_consumer_data_location() -> None
```

##### `reset_authorized_network` <a name="reset_authorized_network" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAuthorizedNetwork"></a>

```python
def reset_authorized_network() -> None
```

##### `reset_billing_type` <a name="reset_billing_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetBillingType"></a>

```python
def reset_billing_type() -> None
```

##### `reset_control_plane_encryption_key_name` <a name="reset_control_plane_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetControlPlaneEncryptionKeyName"></a>

```python
def reset_control_plane_encryption_key_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_vpc_peering` <a name="reset_disable_vpc_peering" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisableVpcPeering"></a>

```python
def reset_disable_vpc_peering() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_runtime_database_encryption_key_name` <a name="reset_runtime_database_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName"></a>

```python
def reset_runtime_database_encryption_key_name() -> None
```

##### `reset_runtime_type` <a name="reset_runtime_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeType"></a>

```python
def reset_runtime_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeOrganization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apigeeProjectId">apigee_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference">ApigeeOrganizationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference">ApigeeOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegionInput">analytics_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput">api_consumer_data_encryption_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataLocationInput">api_consumer_data_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetworkInput">authorized_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingTypeInput">billing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.controlPlaneEncryptionKeyNameInput">control_plane_encryption_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.disableVpcPeeringInput">disable_vpc_peering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retentionInput">retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput">runtime_database_encryption_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeTypeInput">runtime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegion">analytics_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataEncryptionKeyName">api_consumer_data_encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataLocation">api_consumer_data_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetwork">authorized_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingType">billing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.controlPlaneEncryptionKeyName">control_plane_encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.disableVpcPeering">disable_vpc_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retention">retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyName">runtime_database_encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeType">runtime_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apigee_project_id`<sup>Required</sup> <a name="apigee_project_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apigeeProjectId"></a>

```python
apigee_project_id: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.properties"></a>

```python
properties: ApigeeOrganizationPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference">ApigeeOrganizationPropertiesOutputReference</a>

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeouts"></a>

```python
timeouts: ApigeeOrganizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference">ApigeeOrganizationTimeoutsOutputReference</a>

---

##### `analytics_region_input`<sup>Optional</sup> <a name="analytics_region_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegionInput"></a>

```python
analytics_region_input: str
```

- *Type:* str

---

##### `api_consumer_data_encryption_key_name_input`<sup>Optional</sup> <a name="api_consumer_data_encryption_key_name_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput"></a>

```python
api_consumer_data_encryption_key_name_input: str
```

- *Type:* str

---

##### `api_consumer_data_location_input`<sup>Optional</sup> <a name="api_consumer_data_location_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataLocationInput"></a>

```python
api_consumer_data_location_input: str
```

- *Type:* str

---

##### `authorized_network_input`<sup>Optional</sup> <a name="authorized_network_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetworkInput"></a>

```python
authorized_network_input: str
```

- *Type:* str

---

##### `billing_type_input`<sup>Optional</sup> <a name="billing_type_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingTypeInput"></a>

```python
billing_type_input: str
```

- *Type:* str

---

##### `control_plane_encryption_key_name_input`<sup>Optional</sup> <a name="control_plane_encryption_key_name_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.controlPlaneEncryptionKeyNameInput"></a>

```python
control_plane_encryption_key_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_vpc_peering_input`<sup>Optional</sup> <a name="disable_vpc_peering_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.disableVpcPeeringInput"></a>

```python
disable_vpc_peering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.propertiesInput"></a>

```python
properties_input: ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retentionInput"></a>

```python
retention_input: str
```

- *Type:* str

---

##### `runtime_database_encryption_key_name_input`<sup>Optional</sup> <a name="runtime_database_encryption_key_name_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput"></a>

```python
runtime_database_encryption_key_name_input: str
```

- *Type:* str

---

##### `runtime_type_input`<sup>Optional</sup> <a name="runtime_type_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeTypeInput"></a>

```python
runtime_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeOrganizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>]

---

##### `analytics_region`<sup>Required</sup> <a name="analytics_region" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegion"></a>

```python
analytics_region: str
```

- *Type:* str

---

##### `api_consumer_data_encryption_key_name`<sup>Required</sup> <a name="api_consumer_data_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataEncryptionKeyName"></a>

```python
api_consumer_data_encryption_key_name: str
```

- *Type:* str

---

##### `api_consumer_data_location`<sup>Required</sup> <a name="api_consumer_data_location" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.apiConsumerDataLocation"></a>

```python
api_consumer_data_location: str
```

- *Type:* str

---

##### `authorized_network`<sup>Required</sup> <a name="authorized_network" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetwork"></a>

```python
authorized_network: str
```

- *Type:* str

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

---

##### `control_plane_encryption_key_name`<sup>Required</sup> <a name="control_plane_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.controlPlaneEncryptionKeyName"></a>

```python
control_plane_encryption_key_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_vpc_peering`<sup>Required</sup> <a name="disable_vpc_peering" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.disableVpcPeering"></a>

```python
disable_vpc_peering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retention"></a>

```python
retention: str
```

- *Type:* str

---

##### `runtime_database_encryption_key_name`<sup>Required</sup> <a name="runtime_database_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyName"></a>

```python
runtime_database_encryption_key_name: str
```

- *Type:* str

---

##### `runtime_type`<sup>Required</sup> <a name="runtime_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeOrganizationConfig <a name="ApigeeOrganizationConfig" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  analytics_region: str = None,
  api_consumer_data_encryption_key_name: str = None,
  api_consumer_data_location: str = None,
  authorized_network: str = None,
  billing_type: str = None,
  control_plane_encryption_key_name: str = None,
  description: str = None,
  disable_vpc_peering: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  properties: ApigeeOrganizationProperties = None,
  retention: str = None,
  runtime_database_encryption_key_name: str = None,
  runtime_type: str = None,
  timeouts: ApigeeOrganizationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.projectId">project_id</a></code> | <code>str</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.analyticsRegion">analytics_region</a></code> | <code>str</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName">api_consumer_data_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting API consumer data. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.apiConsumerDataLocation">api_consumer_data_location</a></code> | <code>str</code> | This field is needed only for customers using non-default data residency regions. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.authorizedNetwork">authorized_network</a></code> | <code>str</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.billingType">billing_type</a></code> | <code>str</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName">control_plane_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.description">description</a></code> | <code>str</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.disableVpcPeering">disable_vpc_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#id ApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.retention">retention</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName">runtime_database_encryption_key_name</a></code> | <code>str</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeType">runtime_type</a></code> | <code>str</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#project_id ApigeeOrganization#project_id}

---

##### `analytics_region`<sup>Optional</sup> <a name="analytics_region" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.analyticsRegion"></a>

```python
analytics_region: str
```

- *Type:* str

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#analytics_region ApigeeOrganization#analytics_region}

---

##### `api_consumer_data_encryption_key_name`<sup>Optional</sup> <a name="api_consumer_data_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName"></a>

```python
api_consumer_data_encryption_key_name: str
```

- *Type:* str

Cloud KMS key name used for encrypting API consumer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#api_consumer_data_encryption_key_name ApigeeOrganization#api_consumer_data_encryption_key_name}

---

##### `api_consumer_data_location`<sup>Optional</sup> <a name="api_consumer_data_location" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.apiConsumerDataLocation"></a>

```python
api_consumer_data_location: str
```

- *Type:* str

This field is needed only for customers using non-default data residency regions.

Apigee stores some control plane data only in single region.
This field determines which single region Apigee should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#api_consumer_data_location ApigeeOrganization#api_consumer_data_location}

---

##### `authorized_network`<sup>Optional</sup> <a name="authorized_network" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.authorizedNetwork"></a>

```python
authorized_network: str
```

- *Type:* str

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#authorized_network ApigeeOrganization#authorized_network}

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#billing_type ApigeeOrganization#billing_type}

---

##### `control_plane_encryption_key_name`<sup>Optional</sup> <a name="control_plane_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName"></a>

```python
control_plane_encryption_key_name: str
```

- *Type:* str

Cloud KMS key name used for encrypting control plane data that is stored in a multi region.

Only used for the data residency region "US" or "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#control_plane_encryption_key_name ApigeeOrganization#control_plane_encryption_key_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#description ApigeeOrganization#description}

---

##### `disable_vpc_peering`<sup>Optional</sup> <a name="disable_vpc_peering" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.disableVpcPeering"></a>

```python
disable_vpc_peering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee.

Required if an 'authorizedNetwork'
on the consumer project is not provided, in which case the flag should be set to 'true'.
Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#disable_vpc_peering ApigeeOrganization#disable_vpc_peering}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#display_name ApigeeOrganization#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#id ApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.properties"></a>

```python
properties: ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#properties ApigeeOrganization#properties}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.retention"></a>

```python
retention: str
```

- *Type:* str

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#retention ApigeeOrganization#retention}

---

##### `runtime_database_encryption_key_name`<sup>Optional</sup> <a name="runtime_database_encryption_key_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName"></a>

```python
runtime_database_encryption_key_name: str
```

- *Type:* str

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#runtime_type ApigeeOrganization#runtime_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.timeouts"></a>

```python
timeouts: ApigeeOrganizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#timeouts ApigeeOrganization#timeouts}

---

### ApigeeOrganizationProperties <a name="ApigeeOrganizationProperties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationProperties(
  property: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.property.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]</code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.property.property"></a>

```python
property: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#property ApigeeOrganization#property}

---

### ApigeeOrganizationPropertiesProperty <a name="ApigeeOrganizationPropertiesProperty" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationPropertiesProperty(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.name">name</a></code> | <code>str</code> | Name of the property. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.value">value</a></code> | <code>str</code> | Value of the property. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#name ApigeeOrganization#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#value ApigeeOrganization#value}

---

### ApigeeOrganizationTimeouts <a name="ApigeeOrganizationTimeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#create ApigeeOrganization#create}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#delete ApigeeOrganization#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#update ApigeeOrganization#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#create ApigeeOrganization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#delete ApigeeOrganization#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/apigee_organization#update ApigeeOrganization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeOrganizationPropertiesOutputReference <a name="ApigeeOrganizationPropertiesOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty">put_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resetProperty">reset_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_property` <a name="put_property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty"></a>

```python
def put_property(
  value: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]

---

##### `reset_property` <a name="reset_property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resetProperty"></a>

```python
def reset_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.property">property</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList">ApigeeOrganizationPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.propertyInput">property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.property"></a>

```python
property: ApigeeOrganizationPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList">ApigeeOrganizationPropertiesPropertyList</a>

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.propertyInput"></a>

```python
property_input: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

---


### ApigeeOrganizationPropertiesPropertyList <a name="ApigeeOrganizationPropertiesPropertyList" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationPropertiesPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeOrganizationPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeOrganizationPropertiesProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]]

---


### ApigeeOrganizationPropertiesPropertyOutputReference <a name="ApigeeOrganizationPropertiesPropertyOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeOrganizationPropertiesProperty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty">ApigeeOrganizationPropertiesProperty</a>]

---


### ApigeeOrganizationTimeoutsOutputReference <a name="ApigeeOrganizationTimeoutsOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_organization

apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeOrganizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>]

---



