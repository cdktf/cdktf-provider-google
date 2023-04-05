# `notebooksInstance` Submodule <a name="`notebooksInstance` Submodule" id="@cdktf/provider-google.notebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksInstance <a name="NotebooksInstance" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstance(scope Construct, id *string, config NotebooksInstanceConfig) NotebooksInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig">NotebooksInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig">NotebooksInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig">PutAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig">ResetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath">ResetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb">ResetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType">ResetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver">ResetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners">ResetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess">ResetNoProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp">ResetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk">ResetNoRemoveDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes">ResetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAcceleratorConfig` <a name="PutAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig"></a>

```go
func PutAcceleratorConfig(value NotebooksInstanceAcceleratorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage"></a>

```go
func PutContainerImage(value NotebooksInstanceContainerImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity"></a>

```go
func PutReservationAffinity(value NotebooksInstanceReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value NotebooksInstanceShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts"></a>

```go
func PutTimeouts(value NotebooksInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage"></a>

```go
func PutVmImage(value NotebooksInstanceVmImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `ResetAcceleratorConfig` <a name="ResetAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig"></a>

```go
func ResetAcceleratorConfig()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType"></a>

```go
func ResetBootDiskType()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime"></a>

```go
func ResetCreateTime()
```

##### `ResetCustomGpuDriverPath` <a name="ResetCustomGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath"></a>

```go
func ResetCustomGpuDriverPath()
```

##### `ResetDataDiskSizeGb` <a name="ResetDataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb"></a>

```go
func ResetDataDiskSizeGb()
```

##### `ResetDataDiskType` <a name="ResetDataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType"></a>

```go
func ResetDataDiskType()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption"></a>

```go
func ResetDiskEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallGpuDriver` <a name="ResetInstallGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver"></a>

```go
func ResetInstallGpuDriver()
```

##### `ResetInstanceOwners` <a name="ResetInstanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners"></a>

```go
func ResetInstanceOwners()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType"></a>

```go
func ResetNicType()
```

##### `ResetNoProxyAccess` <a name="ResetNoProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess"></a>

```go
func ResetNoProxyAccess()
```

##### `ResetNoPublicIp` <a name="ResetNoPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp"></a>

```go
func ResetNoPublicIp()
```

##### `ResetNoRemoveDataDisk` <a name="ResetNoRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk"></a>

```go
func ResetNoRemoveDataDisk()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript"></a>

```go
func ResetPostStartupScript()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetServiceAccountScopes` <a name="ResetServiceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes"></a>

```go
func ResetServiceAccountScopes()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime"></a>

```go
func ResetUpdateTime()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage"></a>

```go
func ResetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NotebooksInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NotebooksInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NotebooksInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri">ProxyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput">AcceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput">CreateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput">CustomGpuDriverPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput">DataDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput">DataDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput">InstallGpuDriverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput">InstanceOwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput">NicTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput">NoProxyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput">NoPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput">NoRemoveDataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput">ServiceAccountScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput">UpdateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType">DataDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption">DiskEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver">InstallGpuDriver</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners">InstanceOwners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType">NicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess">NoProxyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp">NoPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk">NoRemoveDataDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceleratorConfig`<sup>Required</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig"></a>

```go
func AcceleratorConfig() NotebooksInstanceAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage"></a>

```go
func ContainerImage() NotebooksInstanceContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a>

---

##### `ProxyUri`<sup>Required</sup> <a name="ProxyUri" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri"></a>

```go
func ProxyUri() *string
```

- *Type:* *string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity"></a>

```go
func ReservationAffinity() NotebooksInstanceReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() NotebooksInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts"></a>

```go
func Timeouts() NotebooksInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage"></a>

```go
func VmImage() NotebooksInstanceVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a>

---

##### `AcceleratorConfigInput`<sup>Optional</sup> <a name="AcceleratorConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput"></a>

```go
func AcceleratorConfigInput() NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput"></a>

```go
func BootDiskTypeInput() *string
```

- *Type:* *string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput"></a>

```go
func ContainerImageInput() NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput"></a>

```go
func CreateTimeInput() *string
```

- *Type:* *string

---

##### `CustomGpuDriverPathInput`<sup>Optional</sup> <a name="CustomGpuDriverPathInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput"></a>

```go
func CustomGpuDriverPathInput() *string
```

- *Type:* *string

---

##### `DataDiskSizeGbInput`<sup>Optional</sup> <a name="DataDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput"></a>

```go
func DataDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DataDiskTypeInput`<sup>Optional</sup> <a name="DataDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput"></a>

```go
func DataDiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput"></a>

```go
func DiskEncryptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallGpuDriverInput`<sup>Optional</sup> <a name="InstallGpuDriverInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput"></a>

```go
func InstallGpuDriverInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceOwnersInput`<sup>Optional</sup> <a name="InstanceOwnersInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput"></a>

```go
func InstanceOwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput"></a>

```go
func NicTypeInput() *string
```

- *Type:* *string

---

##### `NoProxyAccessInput`<sup>Optional</sup> <a name="NoProxyAccessInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput"></a>

```go
func NoProxyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NoPublicIpInput`<sup>Optional</sup> <a name="NoPublicIpInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput"></a>

```go
func NoPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `NoRemoveDataDiskInput`<sup>Optional</sup> <a name="NoRemoveDataDiskInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput"></a>

```go
func NoRemoveDataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput"></a>

```go
func PostStartupScriptInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceAccountScopesInput`<sup>Optional</sup> <a name="ServiceAccountScopesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput"></a>

```go
func ServiceAccountScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput"></a>

```go
func UpdateTimeInput() *string
```

- *Type:* *string

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput"></a>

```go
func VmImageInput() NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType"></a>

```go
func BootDiskType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomGpuDriverPath`<sup>Required</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath"></a>

```go
func CustomGpuDriverPath() *string
```

- *Type:* *string

---

##### `DataDiskSizeGb`<sup>Required</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb"></a>

```go
func DataDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DataDiskType`<sup>Required</sup> <a name="DataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType"></a>

```go
func DataDiskType() *string
```

- *Type:* *string

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption"></a>

```go
func DiskEncryption() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallGpuDriver`<sup>Required</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver"></a>

```go
func InstallGpuDriver() interface{}
```

- *Type:* interface{}

---

##### `InstanceOwners`<sup>Required</sup> <a name="InstanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners"></a>

```go
func InstanceOwners() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType"></a>

```go
func NicType() *string
```

- *Type:* *string

---

##### `NoProxyAccess`<sup>Required</sup> <a name="NoProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess"></a>

```go
func NoProxyAccess() interface{}
```

- *Type:* interface{}

---

##### `NoPublicIp`<sup>Required</sup> <a name="NoPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp"></a>

```go
func NoPublicIp() interface{}
```

- *Type:* interface{}

---

##### `NoRemoveDataDisk`<sup>Required</sup> <a name="NoRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk"></a>

```go
func NoRemoveDataDisk() interface{}
```

- *Type:* interface{}

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript"></a>

```go
func PostStartupScript() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceAccountScopes`<sup>Required</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes"></a>

```go
func ServiceAccountScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksInstanceAcceleratorConfig <a name="NotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceAcceleratorConfig {
	CoreCount: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type">Type</a></code> | <code>*string</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#core_count NotebooksInstance#core_count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#type NotebooksInstance#type}

---

### NotebooksInstanceConfig <a name="NotebooksInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MachineType: *string,
	Name: *string,
	AcceleratorConfig: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceAcceleratorConfig,
	BootDiskSizeGb: *f64,
	BootDiskType: *string,
	ContainerImage: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceContainerImage,
	CreateTime: *string,
	CustomGpuDriverPath: *string,
	DataDiskSizeGb: *f64,
	DataDiskType: *string,
	DiskEncryption: *string,
	Id: *string,
	InstallGpuDriver: interface{},
	InstanceOwners: *[]*string,
	KmsKey: *string,
	Labels: *map[string]*string,
	Metadata: *map[string]*string,
	Network: *string,
	NicType: *string,
	NoProxyAccess: interface{},
	NoPublicIp: interface{},
	NoRemoveDataDisk: interface{},
	PostStartupScript: *string,
	Project: *string,
	ReservationAffinity: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceReservationAffinity,
	ServiceAccount: *string,
	ServiceAccountScopes: *[]*string,
	ShieldedInstanceConfig: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig,
	Subnet: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceTimeouts,
	UpdateTime: *string,
	VmImage: github.com/cdktf/cdktf-provider-google-go/google.notebooksInstance.NotebooksInstanceVmImage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location">Location</a></code> | <code>*string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType">MachineType</a></code> | <code>*string</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>*string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>*f64</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType">DataDiskType</a></code> | <code>*string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption">DiskEncryption</a></code> | <code>*string</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver">InstallGpuDriver</a></code> | <code>interface{}</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners">InstanceOwners</a></code> | <code>*[]*string</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network">Network</a></code> | <code>*string</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType">NicType</a></code> | <code>*string</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess">NoProxyAccess</a></code> | <code>interface{}</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp">NoPublicIp</a></code> | <code>interface{}</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk">NoRemoveDataDisk</a></code> | <code>interface{}</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet">Subnet</a></code> | <code>*string</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#location NotebooksInstance#location}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#name NotebooksInstance#name}

---

##### `AcceleratorConfig`<sup>Optional</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig"></a>

```go
AcceleratorConfig NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType"></a>

```go
BootDiskType *string
```

- *Type:* *string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage"></a>

```go
ContainerImage NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime"></a>

```go
CreateTime *string
```

- *Type:* *string

Instance creation time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `CustomGpuDriverPath`<sup>Optional</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath"></a>

```go
CustomGpuDriverPath *string
```

- *Type:* *string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `DataDiskSizeGb`<sup>Optional</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```go
DataDiskSizeGb *f64
```

- *Type:* *f64

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `DataDiskType`<sup>Optional</sup> <a name="DataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType"></a>

```go
DataDiskType *string
```

- *Type:* *string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption"></a>

```go
DiskEncryption *string
```

- *Type:* *string

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallGpuDriver`<sup>Optional</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver"></a>

```go
InstallGpuDriver interface{}
```

- *Type:* interface{}

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `InstanceOwners`<sup>Optional</sup> <a name="InstanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners"></a>

```go
InstanceOwners *[]*string
```

- *Type:* *[]*string

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#labels NotebooksInstance#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#network NotebooksInstance#network}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType"></a>

```go
NicType *string
```

- *Type:* *string

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `NoProxyAccess`<sup>Optional</sup> <a name="NoProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess"></a>

```go
NoProxyAccess interface{}
```

- *Type:* interface{}

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `NoPublicIp`<sup>Optional</sup> <a name="NoPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp"></a>

```go
NoPublicIp interface{}
```

- *Type:* interface{}

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `NoRemoveDataDisk`<sup>Optional</sup> <a name="NoRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```go
NoRemoveDataDisk interface{}
```

- *Type:* interface{}

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript"></a>

```go
PostStartupScript *string
```

- *Type:* *string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#project NotebooksInstance#project}.

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity"></a>

```go
ReservationAffinity NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `ServiceAccountScopes`<sup>Optional</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes"></a>

```go
ServiceAccountScopes *[]*string
```

- *Type:* *[]*string

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#tags NotebooksInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts"></a>

```go
Timeouts NotebooksInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime"></a>

```go
UpdateTime *string
```

- *Type:* *string

Instance update time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage"></a>

```go
VmImage NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

### NotebooksInstanceContainerImage <a name="NotebooksInstanceContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceContainerImage {
	Repository: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository">Repository</a></code> | <code>*string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag">Tag</a></code> | <code>*string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#repository NotebooksInstance#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#tag NotebooksInstance#tag}

---

### NotebooksInstanceReservationAffinity <a name="NotebooksInstanceReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceReservationAffinity {
	ConsumeReservationType: *string,
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType">ConsumeReservationType</a></code> | <code>*string</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of reservation resource. |

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```go
ConsumeReservationType *string
```

- *Type:* *string

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#key NotebooksInstance#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#values NotebooksInstance#values}

---

### NotebooksInstanceShieldedInstanceConfig <a name="NotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceShieldedInstanceConfig {
	EnableIntegrityMonitoring: interface{},
	EnableSecureBoot: interface{},
	EnableVtpm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```go
EnableIntegrityMonitoring interface{}
```

- *Type:* interface{}

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```go
EnableVtpm interface{}
```

- *Type:* interface{}

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}

---

### NotebooksInstanceTimeouts <a name="NotebooksInstanceTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#create NotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#delete NotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#update NotebooksInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#create NotebooksInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#delete NotebooksInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#update NotebooksInstance#update}.

---

### NotebooksInstanceVmImage <a name="NotebooksInstanceVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

&notebooksinstance.NotebooksInstanceVmImage {
	Project: *string,
	ImageFamily: *string,
	ImageName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project">Project</a></code> | <code>*string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily">ImageFamily</a></code> | <code>*string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName">ImageName</a></code> | <code>*string</code> | Use VM image name to find the image. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#project NotebooksInstance#project}

---

##### `ImageFamily`<sup>Optional</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily"></a>

```go
ImageFamily *string
```

- *Type:* *string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#image_family NotebooksInstance#image_family}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#image_name NotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksInstanceAcceleratorConfigOutputReference <a name="NotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceAcceleratorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceAcceleratorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---


### NotebooksInstanceContainerImageOutputReference <a name="NotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceContainerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceContainerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---


### NotebooksInstanceReservationAffinityOutputReference <a name="NotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">ConsumeReservationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">ConsumeReservationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumeReservationTypeInput`<sup>Optional</sup> <a name="ConsumeReservationTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```go
func ConsumeReservationTypeInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```go
func ConsumeReservationType() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---


### NotebooksInstanceShieldedInstanceConfigOutputReference <a name="NotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```go
func ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```go
func ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```go
func EnableIntegrityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```go
func EnableVtpmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---


### NotebooksInstanceTimeoutsOutputReference <a name="NotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotebooksInstanceVmImageOutputReference <a name="NotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksinstance"

notebooksinstance.NewNotebooksInstanceVmImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksInstanceVmImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily">ResetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageFamily` <a name="ResetImageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```go
func ResetImageFamily()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName"></a>

```go
func ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput">ImageFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily">ImageFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageFamilyInput`<sup>Optional</sup> <a name="ImageFamilyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```go
func ImageFamilyInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ImageFamily`<sup>Required</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```go
func ImageFamily() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---



