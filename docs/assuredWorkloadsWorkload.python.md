# `assuredWorkloadsWorkload` Submodule <a name="`assuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google.assuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssuredWorkloadsWorkload <a name="AssuredWorkloadsWorkload" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkload(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_regime: str,
  display_name: str,
  location: str,
  organization: str,
  billing_account: str = None,
  enable_sovereign_controls: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_settings: AssuredWorkloadsWorkloadKmsSettings = None,
  labels: typing.Mapping[str] = None,
  partner: str = None,
  partner_permissions: AssuredWorkloadsWorkloadPartnerPermissions = None,
  partner_services_billing_account: str = None,
  provisioned_resources_parent: str = None,
  resource_settings: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]] = None,
  timeouts: AssuredWorkloadsWorkloadTimeouts = None,
  violation_notifications_enabled: typing.Union[bool, IResolvable] = None,
  workload_options: AssuredWorkloadsWorkloadWorkloadOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.complianceRegime">compliance_regime</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.billingAccount">billing_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.enableSovereignControls">enable_sovereign_controls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.kmsSettings">kms_settings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partner">partner</a></code> | <code>str</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partnerPermissions">partner_permissions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partnerServicesBillingAccount">partner_services_billing_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent">provisioned_resources_parent</a></code> | <code>str</code> | Input only. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.resourceSettings">resource_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]</code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.violationNotificationsEnabled">violation_notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.workloadOptions">workload_options</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_regime`<sup>Required</sup> <a name="compliance_regime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.complianceRegime"></a>

- *Type:* str

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.displayName"></a>

- *Type:* str

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.organization"></a>

- *Type:* str

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}

---

##### `billing_account`<sup>Optional</sup> <a name="billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.billingAccount"></a>

- *Type:* str

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}

---

##### `enable_sovereign_controls`<sup>Optional</sup> <a name="enable_sovereign_controls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.enableSovereignControls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#enable_sovereign_controls AssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_settings`<sup>Optional</sup> <a name="kms_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.kmsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partner"></a>

- *Type:* str

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner AssuredWorkloadsWorkload#partner}

---

##### `partner_permissions`<sup>Optional</sup> <a name="partner_permissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partnerPermissions"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_permissions AssuredWorkloadsWorkload#partner_permissions}

---

##### `partner_services_billing_account`<sup>Optional</sup> <a name="partner_services_billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.partnerServicesBillingAccount"></a>

- *Type:* str

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_services_billing_account AssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `provisioned_resources_parent`<sup>Optional</sup> <a name="provisioned_resources_parent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent"></a>

- *Type:* str

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resource_settings`<sup>Optional</sup> <a name="resource_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.resourceSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}

---

##### `violation_notifications_enabled`<sup>Optional</sup> <a name="violation_notifications_enabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.violationNotificationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#violation_notifications_enabled AssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `workload_options`<sup>Optional</sup> <a name="workload_options" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.workloadOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#workload_options AssuredWorkloadsWorkload#workload_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings">put_kms_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions">put_partner_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings">put_resource_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions">put_workload_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetBillingAccount">reset_billing_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetEnableSovereignControls">reset_enable_sovereign_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings">reset_kms_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartner">reset_partner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerPermissions">reset_partner_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerServicesBillingAccount">reset_partner_services_billing_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent">reset_provisioned_resources_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings">reset_resource_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetViolationNotificationsEnabled">reset_violation_notifications_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetWorkloadOptions">reset_workload_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kms_settings` <a name="put_kms_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings"></a>

```python
def put_kms_settings(
  next_rotation_time: str,
  rotation_period: str
) -> None
```

###### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings.parameter.nextRotationTime"></a>

- *Type:* str

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}

---

###### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings.parameter.rotationPeriod"></a>

- *Type:* str

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}

---

##### `put_partner_permissions` <a name="put_partner_permissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions"></a>

```python
def put_partner_permissions(
  assured_workloads_monitoring: typing.Union[bool, IResolvable] = None,
  data_logs_viewer: typing.Union[bool, IResolvable] = None,
  service_access_approver: typing.Union[bool, IResolvable] = None
) -> None
```

###### `assured_workloads_monitoring`<sup>Optional</sup> <a name="assured_workloads_monitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions.parameter.assuredWorkloadsMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Allow partner to view violation alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#assured_workloads_monitoring AssuredWorkloadsWorkload#assured_workloads_monitoring}

---

###### `data_logs_viewer`<sup>Optional</sup> <a name="data_logs_viewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions.parameter.dataLogsViewer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the partner to view inspectability logs and monitoring violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#data_logs_viewer AssuredWorkloadsWorkload#data_logs_viewer}

---

###### `service_access_approver`<sup>Optional</sup> <a name="service_access_approver" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putPartnerPermissions.parameter.serviceAccessApprover"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Allow partner to view access approval logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#service_access_approver AssuredWorkloadsWorkload#service_access_approver}

---

##### `put_resource_settings` <a name="put_resource_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings"></a>

```python
def put_resource_settings(
  value: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}.

---

##### `put_workload_options` <a name="put_workload_options" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions"></a>

```python
def put_workload_options(
  kaj_enrollment_type: str = None
) -> None
```

###### `kaj_enrollment_type`<sup>Optional</sup> <a name="kaj_enrollment_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putWorkloadOptions.parameter.kajEnrollmentType"></a>

- *Type:* str

Indicates type of KAJ enrollment for the workload.

Currently, only specifiying KEY_ACCESS_TRANSPARENCY_OFF is implemented to not enroll in KAT-level KAJ enrollment for Regional Controls workloads. Possible values: KAJ_ENROLLMENT_TYPE_UNSPECIFIED, FULL_KAJ, EKM_ONLY, KEY_ACCESS_TRANSPARENCY_OFF

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kaj_enrollment_type AssuredWorkloadsWorkload#kaj_enrollment_type}

---

##### `reset_billing_account` <a name="reset_billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetBillingAccount"></a>

```python
def reset_billing_account() -> None
```

##### `reset_enable_sovereign_controls` <a name="reset_enable_sovereign_controls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetEnableSovereignControls"></a>

```python
def reset_enable_sovereign_controls() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_settings` <a name="reset_kms_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings"></a>

```python
def reset_kms_settings() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_partner` <a name="reset_partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartner"></a>

```python
def reset_partner() -> None
```

##### `reset_partner_permissions` <a name="reset_partner_permissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerPermissions"></a>

```python
def reset_partner_permissions() -> None
```

##### `reset_partner_services_billing_account` <a name="reset_partner_services_billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetPartnerServicesBillingAccount"></a>

```python
def reset_partner_services_billing_account() -> None
```

##### `reset_provisioned_resources_parent` <a name="reset_provisioned_resources_parent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```python
def reset_provisioned_resources_parent() -> None
```

##### `reset_resource_settings` <a name="reset_resource_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings"></a>

```python
def reset_resource_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_violation_notifications_enabled` <a name="reset_violation_notifications_enabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetViolationNotificationsEnabled"></a>

```python
def reset_violation_notifications_enabled() -> None
```

##### `reset_workload_options` <a name="reset_workload_options" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetWorkloadOptions"></a>

```python
def reset_workload_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkload.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AssuredWorkloadsWorkload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AssuredWorkloadsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AssuredWorkloadsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceStatus">compliance_status</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList">AssuredWorkloadsWorkloadComplianceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.compliantButDisallowedServices">compliant_but_disallowed_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.ekmProvisioningResponse">ekm_provisioning_response</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList">AssuredWorkloadsWorkloadEkmProvisioningResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kajEnrollmentState">kaj_enrollment_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings">kms_settings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissions">partner_permissions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference">AssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings">resource_settings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.saaEnrollmentResponse">saa_enrollment_response</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList">AssuredWorkloadsWorkloadSaaEnrollmentResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptions">workload_options</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference">AssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput">billing_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput">compliance_regime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControlsInput">enable_sovereign_controls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput">kms_settings_input</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerInput">partner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissionsInput">partner_permissions_input</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput">partner_services_billing_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput">provisioned_resources_parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput">resource_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabledInput">violation_notifications_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptionsInput">workload_options_input</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount">billing_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime">compliance_regime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControls">enable_sovereign_controls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partner">partner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccount">partner_services_billing_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent">provisioned_resources_parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabled">violation_notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_status`<sup>Required</sup> <a name="compliance_status" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceStatus"></a>

```python
compliance_status: AssuredWorkloadsWorkloadComplianceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList">AssuredWorkloadsWorkloadComplianceStatusList</a>

---

##### `compliant_but_disallowed_services`<sup>Required</sup> <a name="compliant_but_disallowed_services" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.compliantButDisallowedServices"></a>

```python
compliant_but_disallowed_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ekm_provisioning_response`<sup>Required</sup> <a name="ekm_provisioning_response" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.ekmProvisioningResponse"></a>

```python
ekm_provisioning_response: AssuredWorkloadsWorkloadEkmProvisioningResponseList
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList">AssuredWorkloadsWorkloadEkmProvisioningResponseList</a>

---

##### `kaj_enrollment_state`<sup>Required</sup> <a name="kaj_enrollment_state" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kajEnrollmentState"></a>

```python
kaj_enrollment_state: str
```

- *Type:* str

---

##### `kms_settings`<sup>Required</sup> <a name="kms_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings"></a>

```python
kms_settings: AssuredWorkloadsWorkloadKmsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partner_permissions`<sup>Required</sup> <a name="partner_permissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissions"></a>

```python
partner_permissions: AssuredWorkloadsWorkloadPartnerPermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference">AssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources"></a>

```python
resources: AssuredWorkloadsWorkloadResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a>

---

##### `resource_settings`<sup>Required</sup> <a name="resource_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings"></a>

```python
resource_settings: AssuredWorkloadsWorkloadResourceSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `saa_enrollment_response`<sup>Required</sup> <a name="saa_enrollment_response" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.saaEnrollmentResponse"></a>

```python
saa_enrollment_response: AssuredWorkloadsWorkloadSaaEnrollmentResponseList
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList">AssuredWorkloadsWorkloadSaaEnrollmentResponseList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts"></a>

```python
timeouts: AssuredWorkloadsWorkloadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `workload_options`<sup>Required</sup> <a name="workload_options" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptions"></a>

```python
workload_options: AssuredWorkloadsWorkloadWorkloadOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference">AssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a>

---

##### `billing_account_input`<sup>Optional</sup> <a name="billing_account_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput"></a>

```python
billing_account_input: str
```

- *Type:* str

---

##### `compliance_regime_input`<sup>Optional</sup> <a name="compliance_regime_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```python
compliance_regime_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_sovereign_controls_input`<sup>Optional</sup> <a name="enable_sovereign_controls_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControlsInput"></a>

```python
enable_sovereign_controls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_settings_input`<sup>Optional</sup> <a name="kms_settings_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```python
kms_settings_input: AssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `partner_input`<sup>Optional</sup> <a name="partner_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerInput"></a>

```python
partner_input: str
```

- *Type:* str

---

##### `partner_permissions_input`<sup>Optional</sup> <a name="partner_permissions_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerPermissionsInput"></a>

```python
partner_permissions_input: AssuredWorkloadsWorkloadPartnerPermissions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `partner_services_billing_account_input`<sup>Optional</sup> <a name="partner_services_billing_account_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput"></a>

```python
partner_services_billing_account_input: str
```

- *Type:* str

---

##### `provisioned_resources_parent_input`<sup>Optional</sup> <a name="provisioned_resources_parent_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```python
provisioned_resources_parent_input: str
```

- *Type:* str

---

##### `resource_settings_input`<sup>Optional</sup> <a name="resource_settings_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```python
resource_settings_input: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AssuredWorkloadsWorkloadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>]

---

##### `violation_notifications_enabled_input`<sup>Optional</sup> <a name="violation_notifications_enabled_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabledInput"></a>

```python
violation_notifications_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workload_options_input`<sup>Optional</sup> <a name="workload_options_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.workloadOptionsInput"></a>

```python
workload_options_input: AssuredWorkloadsWorkloadWorkloadOptions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

---

##### `compliance_regime`<sup>Required</sup> <a name="compliance_regime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime"></a>

```python
compliance_regime: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_sovereign_controls`<sup>Required</sup> <a name="enable_sovereign_controls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.enableSovereignControls"></a>

```python
enable_sovereign_controls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `partner`<sup>Required</sup> <a name="partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partner"></a>

```python
partner: str
```

- *Type:* str

---

##### `partner_services_billing_account`<sup>Required</sup> <a name="partner_services_billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.partnerServicesBillingAccount"></a>

```python
partner_services_billing_account: str
```

- *Type:* str

---

##### `provisioned_resources_parent`<sup>Required</sup> <a name="provisioned_resources_parent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```python
provisioned_resources_parent: str
```

- *Type:* str

---

##### `violation_notifications_enabled`<sup>Required</sup> <a name="violation_notifications_enabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.violationNotificationsEnabled"></a>

```python
violation_notifications_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AssuredWorkloadsWorkloadComplianceStatus <a name="AssuredWorkloadsWorkloadComplianceStatus" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus()
```


### AssuredWorkloadsWorkloadConfig <a name="AssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_regime: str,
  display_name: str,
  location: str,
  organization: str,
  billing_account: str = None,
  enable_sovereign_controls: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_settings: AssuredWorkloadsWorkloadKmsSettings = None,
  labels: typing.Mapping[str] = None,
  partner: str = None,
  partner_permissions: AssuredWorkloadsWorkloadPartnerPermissions = None,
  partner_services_billing_account: str = None,
  provisioned_resources_parent: str = None,
  resource_settings: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]] = None,
  timeouts: AssuredWorkloadsWorkloadTimeouts = None,
  violation_notifications_enabled: typing.Union[bool, IResolvable] = None,
  workload_options: AssuredWorkloadsWorkloadWorkloadOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime">compliance_regime</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization">organization</a></code> | <code>str</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount">billing_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.enableSovereignControls">enable_sovereign_controls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings">kms_settings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partner">partner</a></code> | <code>str</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerPermissions">partner_permissions</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount">partner_services_billing_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">provisioned_resources_parent</a></code> | <code>str</code> | Input only. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings">resource_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]</code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled">violation_notifications_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.workloadOptions">workload_options</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_regime`<sup>Required</sup> <a name="compliance_regime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```python
compliance_regime: str
```

- *Type:* str

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}

---

##### `billing_account`<sup>Optional</sup> <a name="billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}

---

##### `enable_sovereign_controls`<sup>Optional</sup> <a name="enable_sovereign_controls" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.enableSovereignControls"></a>

```python
enable_sovereign_controls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#enable_sovereign_controls AssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_settings`<sup>Optional</sup> <a name="kms_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```python
kms_settings: AssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partner"></a>

```python
partner: str
```

- *Type:* str

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner AssuredWorkloadsWorkload#partner}

---

##### `partner_permissions`<sup>Optional</sup> <a name="partner_permissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerPermissions"></a>

```python
partner_permissions: AssuredWorkloadsWorkloadPartnerPermissions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_permissions AssuredWorkloadsWorkload#partner_permissions}

---

##### `partner_services_billing_account`<sup>Optional</sup> <a name="partner_services_billing_account" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount"></a>

```python
partner_services_billing_account: str
```

- *Type:* str

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#partner_services_billing_account AssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `provisioned_resources_parent`<sup>Optional</sup> <a name="provisioned_resources_parent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```python
provisioned_resources_parent: str
```

- *Type:* str

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resource_settings`<sup>Optional</sup> <a name="resource_settings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```python
resource_settings: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```python
timeouts: AssuredWorkloadsWorkloadTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}

---

##### `violation_notifications_enabled`<sup>Optional</sup> <a name="violation_notifications_enabled" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled"></a>

```python
violation_notifications_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#violation_notifications_enabled AssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `workload_options`<sup>Optional</sup> <a name="workload_options" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.workloadOptions"></a>

```python
workload_options: AssuredWorkloadsWorkloadWorkloadOptions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#workload_options AssuredWorkloadsWorkload#workload_options}

---

### AssuredWorkloadsWorkloadEkmProvisioningResponse <a name="AssuredWorkloadsWorkloadEkmProvisioningResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse()
```


### AssuredWorkloadsWorkloadKmsSettings <a name="AssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings(
  next_rotation_time: str,
  rotation_period: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | Required. |

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}

---

### AssuredWorkloadsWorkloadPartnerPermissions <a name="AssuredWorkloadsWorkloadPartnerPermissions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions(
  assured_workloads_monitoring: typing.Union[bool, IResolvable] = None,
  data_logs_viewer: typing.Union[bool, IResolvable] = None,
  service_access_approver: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring">assured_workloads_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Allow partner to view violation alerts. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer">data_logs_viewer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the partner to view inspectability logs and monitoring violations. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover">service_access_approver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Allow partner to view access approval logs. |

---

##### `assured_workloads_monitoring`<sup>Optional</sup> <a name="assured_workloads_monitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring"></a>

```python
assured_workloads_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Allow partner to view violation alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#assured_workloads_monitoring AssuredWorkloadsWorkload#assured_workloads_monitoring}

---

##### `data_logs_viewer`<sup>Optional</sup> <a name="data_logs_viewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer"></a>

```python
data_logs_viewer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the partner to view inspectability logs and monitoring violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#data_logs_viewer AssuredWorkloadsWorkload#data_logs_viewer}

---

##### `service_access_approver`<sup>Optional</sup> <a name="service_access_approver" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover"></a>

```python
service_access_approver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Allow partner to view access approval logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#service_access_approver AssuredWorkloadsWorkload#service_access_approver}

---

### AssuredWorkloadsWorkloadResources <a name="AssuredWorkloadsWorkloadResources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources()
```


### AssuredWorkloadsWorkloadResourceSettings <a name="AssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings(
  display_name: str = None,
  resource_id: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.displayName">display_name</a></code> | <code>str</code> | User-assigned resource display name. If not empty it will be used to create a resource with the specified name. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId">resource_id</a></code> | <code>str</code> | Resource identifier. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType">resource_type</a></code> | <code>str</code> | Indicates the type of resource. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-assigned resource display name. If not empty it will be used to create a resource with the specified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Resource identifier.

For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_id AssuredWorkloadsWorkload#resource_id}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#resource_type AssuredWorkloadsWorkload#resource_type}

---

### AssuredWorkloadsWorkloadSaaEnrollmentResponse <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponse" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse()
```


### AssuredWorkloadsWorkloadTimeouts <a name="AssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}.

---

### AssuredWorkloadsWorkloadWorkloadOptions <a name="AssuredWorkloadsWorkloadWorkloadOptions" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions(
  kaj_enrollment_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType">kaj_enrollment_type</a></code> | <code>str</code> | Indicates type of KAJ enrollment for the workload. |

---

##### `kaj_enrollment_type`<sup>Optional</sup> <a name="kaj_enrollment_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType"></a>

```python
kaj_enrollment_type: str
```

- *Type:* str

Indicates type of KAJ enrollment for the workload.

Currently, only specifiying KEY_ACCESS_TRANSPARENCY_OFF is implemented to not enroll in KAT-level KAJ enrollment for Regional Controls workloads. Possible values: KAJ_ENROLLMENT_TYPE_UNSPECIFIED, FULL_KAJ, EKM_ONLY, KEY_ACCESS_TRANSPARENCY_OFF

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/assured_workloads_workload#kaj_enrollment_type AssuredWorkloadsWorkload#kaj_enrollment_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AssuredWorkloadsWorkloadComplianceStatusList <a name="AssuredWorkloadsWorkloadComplianceStatusList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AssuredWorkloadsWorkloadComplianceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AssuredWorkloadsWorkloadComplianceStatusOutputReference <a name="AssuredWorkloadsWorkloadComplianceStatusOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount">acknowledged_violation_count</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount">active_violation_count</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus">AssuredWorkloadsWorkloadComplianceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledged_violation_count`<sup>Required</sup> <a name="acknowledged_violation_count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount"></a>

```python
acknowledged_violation_count: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `active_violation_count`<sup>Required</sup> <a name="active_violation_count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount"></a>

```python
active_violation_count: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadComplianceStatus
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadComplianceStatus">AssuredWorkloadsWorkloadComplianceStatus</a>

---


### AssuredWorkloadsWorkloadEkmProvisioningResponseList <a name="AssuredWorkloadsWorkloadEkmProvisioningResponseList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference <a name="AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain">ekm_provisioning_error_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping">ekm_provisioning_error_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState">ekm_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse">AssuredWorkloadsWorkloadEkmProvisioningResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ekm_provisioning_error_domain`<sup>Required</sup> <a name="ekm_provisioning_error_domain" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain"></a>

```python
ekm_provisioning_error_domain: str
```

- *Type:* str

---

##### `ekm_provisioning_error_mapping`<sup>Required</sup> <a name="ekm_provisioning_error_mapping" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping"></a>

```python
ekm_provisioning_error_mapping: str
```

- *Type:* str

---

##### `ekm_provisioning_state`<sup>Required</sup> <a name="ekm_provisioning_state" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState"></a>

```python
ekm_provisioning_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadEkmProvisioningResponse
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadEkmProvisioningResponse">AssuredWorkloadsWorkloadEkmProvisioningResponse</a>

---


### AssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="AssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">next_rotation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time_input`<sup>Optional</sup> <a name="next_rotation_time_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```python
next_rotation_time_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadKmsSettings
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---


### AssuredWorkloadsWorkloadPartnerPermissionsOutputReference <a name="AssuredWorkloadsWorkloadPartnerPermissionsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring">reset_assured_workloads_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer">reset_data_logs_viewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover">reset_service_access_approver</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assured_workloads_monitoring` <a name="reset_assured_workloads_monitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring"></a>

```python
def reset_assured_workloads_monitoring() -> None
```

##### `reset_data_logs_viewer` <a name="reset_data_logs_viewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer"></a>

```python
def reset_data_logs_viewer() -> None
```

##### `reset_service_access_approver` <a name="reset_service_access_approver" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover"></a>

```python
def reset_service_access_approver() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput">assured_workloads_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput">data_logs_viewer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput">service_access_approver_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring">assured_workloads_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer">data_logs_viewer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover">service_access_approver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assured_workloads_monitoring_input`<sup>Optional</sup> <a name="assured_workloads_monitoring_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput"></a>

```python
assured_workloads_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_logs_viewer_input`<sup>Optional</sup> <a name="data_logs_viewer_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput"></a>

```python
data_logs_viewer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_access_approver_input`<sup>Optional</sup> <a name="service_access_approver_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput"></a>

```python
service_access_approver_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assured_workloads_monitoring`<sup>Required</sup> <a name="assured_workloads_monitoring" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring"></a>

```python
assured_workloads_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_logs_viewer`<sup>Required</sup> <a name="data_logs_viewer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer"></a>

```python
data_logs_viewer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_access_approver`<sup>Required</sup> <a name="service_access_approver" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover"></a>

```python
service_access_approver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadPartnerPermissions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadPartnerPermissions">AssuredWorkloadsWorkloadPartnerPermissions</a>

---


### AssuredWorkloadsWorkloadResourceSettingsList <a name="AssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AssuredWorkloadsWorkloadResourceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AssuredWorkloadsWorkloadResourceSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]]

---


### AssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="AssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AssuredWorkloadsWorkloadResourceSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>]

---


### AssuredWorkloadsWorkloadResourcesList <a name="AssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AssuredWorkloadsWorkloadResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AssuredWorkloadsWorkloadResourcesOutputReference <a name="AssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```python
resource_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadResources
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a>

---


### AssuredWorkloadsWorkloadSaaEnrollmentResponseList <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponseList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference <a name="AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors">setup_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus">setup_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse">AssuredWorkloadsWorkloadSaaEnrollmentResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `setup_errors`<sup>Required</sup> <a name="setup_errors" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors"></a>

```python
setup_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `setup_status`<sup>Required</sup> <a name="setup_status" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus"></a>

```python
setup_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadSaaEnrollmentResponse
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadSaaEnrollmentResponse">AssuredWorkloadsWorkloadSaaEnrollmentResponse</a>

---


### AssuredWorkloadsWorkloadTimeoutsOutputReference <a name="AssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AssuredWorkloadsWorkloadTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>]

---


### AssuredWorkloadsWorkloadWorkloadOptionsOutputReference <a name="AssuredWorkloadsWorkloadWorkloadOptionsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import assured_workloads_workload

assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType">reset_kaj_enrollment_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kaj_enrollment_type` <a name="reset_kaj_enrollment_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType"></a>

```python
def reset_kaj_enrollment_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput">kaj_enrollment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType">kaj_enrollment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kaj_enrollment_type_input`<sup>Optional</sup> <a name="kaj_enrollment_type_input" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput"></a>

```python
kaj_enrollment_type_input: str
```

- *Type:* str

---

##### `kaj_enrollment_type`<sup>Required</sup> <a name="kaj_enrollment_type" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType"></a>

```python
kaj_enrollment_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue"></a>

```python
internal_value: AssuredWorkloadsWorkloadWorkloadOptions
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadWorkloadOptions">AssuredWorkloadsWorkloadWorkloadOptions</a>

---



