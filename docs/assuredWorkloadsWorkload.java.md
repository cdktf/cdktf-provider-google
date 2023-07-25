# `google_assured_workloads_workload`

Refer to the Terraform Registory for docs: [`google_assured_workloads_workload`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload).

# `assuredWorkloadsWorkload` Submodule <a name="`assuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google.assuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssuredWorkloadsWorkload <a name="AssuredWorkloadsWorkload" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkload;

AssuredWorkloadsWorkload.Builder.create(Construct scope, java.lang.String id)
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
    .billingAccount(java.lang.String)
    .complianceRegime(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .id(java.lang.String)
//  .kmsSettings(AssuredWorkloadsWorkloadKmsSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .provisionedResourcesParent(java.lang.String)
//  .resourceSettings(IResolvable)
//  .resourceSettings(java.util.List<AssuredWorkloadsWorkloadResourceSettings>)
//  .timeouts(AssuredWorkloadsWorkloadTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.resourceSettings">resourceSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>></code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.billingAccount"></a>

- *Type:* java.lang.String

Required.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, 'billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.complianceRegime"></a>

- *Type:* java.lang.String

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsSettings`<sup>Optional</sup> <a name="kmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.kmsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels applied to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}

---

##### `provisionedResourcesParent`<sup>Optional</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent"></a>

- *Type:* java.lang.String

Input only.

The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id}, organizations/{organization_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resourceSettings`<sup>Optional</sup> <a name="resourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.resourceSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>>

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings">putKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings">putResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings">resetKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent">resetProvisionedResourcesParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings">resetResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putKmsSettings` <a name="putKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings"></a>

```java
public void putKmsSettings(AssuredWorkloadsWorkloadKmsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putKmsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---

##### `putResourceSettings` <a name="putResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings"></a>

```java
public void putResourceSettings(IResolvable OR java.util.List<AssuredWorkloadsWorkloadResourceSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts"></a>

```java
public void putTimeouts(AssuredWorkloadsWorkloadTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetId"></a>

```java
public void resetId()
```

##### `resetKmsSettings` <a name="resetKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetKmsSettings"></a>

```java
public void resetKmsSettings()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProvisionedResourcesParent` <a name="resetProvisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```java
public void resetProvisionedResourcesParent()
```

##### `resetResourceSettings` <a name="resetResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetResourceSettings"></a>

```java
public void resetResourceSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkload;

AssuredWorkloadsWorkload.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkload;

AssuredWorkloadsWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkload;

AssuredWorkloadsWorkload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings">resourceSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput">billingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput">complianceRegimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput">kmsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput">provisionedResourcesParentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput">resourceSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `kmsSettings`<sup>Required</sup> <a name="kmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettings"></a>

```java
public AssuredWorkloadsWorkloadKmsSettingsOutputReference getKmsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference">AssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resources"></a>

```java
public AssuredWorkloadsWorkloadResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList">AssuredWorkloadsWorkloadResourcesList</a>

---

##### `resourceSettings`<sup>Required</sup> <a name="resourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettings"></a>

```java
public AssuredWorkloadsWorkloadResourceSettingsList getResourceSettings();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList">AssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeouts"></a>

```java
public AssuredWorkloadsWorkloadTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference">AssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccountInput"></a>

```java
public java.lang.String getBillingAccountInput();
```

- *Type:* java.lang.String

---

##### `complianceRegimeInput`<sup>Optional</sup> <a name="complianceRegimeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```java
public java.lang.String getComplianceRegimeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsSettingsInput`<sup>Optional</sup> <a name="kmsSettingsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```java
public AssuredWorkloadsWorkloadKmsSettings getKmsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `provisionedResourcesParentInput`<sup>Optional</sup> <a name="provisionedResourcesParentInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```java
public java.lang.String getProvisionedResourcesParentInput();
```

- *Type:* java.lang.String

---

##### `resourceSettingsInput`<sup>Optional</sup> <a name="resourceSettingsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```java
public java.lang.Object getResourceSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.complianceRegime"></a>

```java
public java.lang.String getComplianceRegime();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `provisionedResourcesParent`<sup>Required</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```java
public java.lang.String getProvisionedResourcesParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AssuredWorkloadsWorkloadConfig <a name="AssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadConfig;

AssuredWorkloadsWorkloadConfig.builder()
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
    .billingAccount(java.lang.String)
    .complianceRegime(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .id(java.lang.String)
//  .kmsSettings(AssuredWorkloadsWorkloadKmsSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .provisionedResourcesParent(java.lang.String)
//  .resourceSettings(IResolvable)
//  .resourceSettings(java.util.List<AssuredWorkloadsWorkloadResourceSettings>)
//  .timeouts(AssuredWorkloadsWorkloadTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings">resourceSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>></code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

Required.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, 'billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```java
public java.lang.String getComplianceRegime();
```

- *Type:* java.lang.String

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsSettings`<sup>Optional</sup> <a name="kmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```java
public AssuredWorkloadsWorkloadKmsSettings getKmsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels applied to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}

---

##### `provisionedResourcesParent`<sup>Optional</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```java
public java.lang.String getProvisionedResourcesParent();
```

- *Type:* java.lang.String

Input only.

The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id}, organizations/{organization_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resourceSettings`<sup>Optional</sup> <a name="resourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```java
public java.lang.Object getResourceSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>>

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```java
public AssuredWorkloadsWorkloadTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}

---

### AssuredWorkloadsWorkloadKmsSettings <a name="AssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadKmsSettings;

AssuredWorkloadsWorkloadKmsSettings.builder()
    .nextRotationTime(java.lang.String)
    .rotationPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Required. |

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}

---

### AssuredWorkloadsWorkloadResources <a name="AssuredWorkloadsWorkloadResources" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResources;

AssuredWorkloadsWorkloadResources.builder()
    .build();
```


### AssuredWorkloadsWorkloadResourceSettings <a name="AssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResourceSettings;

AssuredWorkloadsWorkloadResourceSettings.builder()
//  .resourceId(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Resource identifier. For a project this represents project_number. If the project is already taken, the workload creation will fail. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Indicates the type of resource. |

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Resource identifier. For a project this represents project_number. If the project is already taken, the workload creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#resource_id AssuredWorkloadsWorkload#resource_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#resource_type AssuredWorkloadsWorkload#resource_type}

---

### AssuredWorkloadsWorkloadTimeouts <a name="AssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadTimeouts;

AssuredWorkloadsWorkloadTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="AssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadKmsSettingsOutputReference;

new AssuredWorkloadsWorkloadKmsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">nextRotationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nextRotationTimeInput`<sup>Optional</sup> <a name="nextRotationTimeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```java
public java.lang.String getNextRotationTimeInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```java
public java.lang.String getRotationPeriodInput();
```

- *Type:* java.lang.String

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```java
public AssuredWorkloadsWorkloadKmsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadKmsSettings">AssuredWorkloadsWorkloadKmsSettings</a>

---


### AssuredWorkloadsWorkloadResourceSettingsList <a name="AssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResourceSettingsList;

new AssuredWorkloadsWorkloadResourceSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```java
public AssuredWorkloadsWorkloadResourceSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>>

---


### AssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="AssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResourceSettingsOutputReference;

new AssuredWorkloadsWorkloadResourceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourceSettings">AssuredWorkloadsWorkloadResourceSettings</a>

---


### AssuredWorkloadsWorkloadResourcesList <a name="AssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResourcesList;

new AssuredWorkloadsWorkloadResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get"></a>

```java
public AssuredWorkloadsWorkloadResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AssuredWorkloadsWorkloadResourcesOutputReference <a name="AssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadResourcesOutputReference;

new AssuredWorkloadsWorkloadResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```java
public java.lang.Number getResourceId();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```java
public AssuredWorkloadsWorkloadResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadResources">AssuredWorkloadsWorkloadResources</a>

---


### AssuredWorkloadsWorkloadTimeoutsOutputReference <a name="AssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.assured_workloads_workload.AssuredWorkloadsWorkloadTimeoutsOutputReference;

new AssuredWorkloadsWorkloadTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.assuredWorkloadsWorkload.AssuredWorkloadsWorkloadTimeouts">AssuredWorkloadsWorkloadTimeouts</a>

---



