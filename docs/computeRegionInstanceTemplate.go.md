# `computeRegionInstanceTemplate` Submodule <a name="`computeRegionInstanceTemplate` Submodule" id="@cdktf/provider-google.computeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstanceTemplate <a name="ComputeRegionInstanceTemplate" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplate(scope Construct, id *string, config ComputeRegionInstanceTemplateConfig) ComputeRegionInstanceTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig">ComputeRegionInstanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig">ComputeRegionInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetInstanceDescription">ResetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures"></a>

```go
func PutAdvancedMachineFeatures(value ComputeRegionInstanceTemplateAdvancedMachineFeatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig"></a>

```go
func PutConfidentialInstanceConfig(value ComputeRegionInstanceTemplateConfidentialInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk"></a>

```go
func PutDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator"></a>

```go
func PutGuestAccelerator(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig"></a>

```go
func PutNetworkPerformanceConfig(value ComputeRegionInstanceTemplateNetworkPerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity"></a>

```go
func PutReservationAffinity(value ComputeRegionInstanceTemplateReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling"></a>

```go
func PutScheduling(value ComputeRegionInstanceTemplateScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount"></a>

```go
func PutServiceAccount(value ComputeRegionInstanceTemplateServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value ComputeRegionInstanceTemplateShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionInstanceTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetAdvancedMachineFeatures"></a>

```go
func ResetAdvancedMachineFeatures()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetCanIpForward"></a>

```go
func ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetConfidentialInstanceConfig"></a>

```go
func ResetConfidentialInstanceConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetGuestAccelerator"></a>

```go
func ResetGuestAccelerator()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceDescription` <a name="ResetInstanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetInstanceDescription"></a>

```go
func ResetInstanceDescription()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMetadataStartupScript"></a>

```go
func ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetNetworkPerformanceConfig"></a>

```go
func ResetNetworkPerformanceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetScheduling"></a>

```go
func ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.ComputeRegionInstanceTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.ComputeRegionInstanceTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.ComputeRegionInstanceTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.ComputeRegionInstanceTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRegionInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList">ComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList">ComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList">ComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference">ComputeRegionInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference">ComputeRegionInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference">ComputeRegionInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference">ComputeRegionInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.diskInput">DiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescriptionInput">InstanceDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescription">InstanceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```go
func AdvancedMachineFeatures() ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```go
func ConfidentialInstanceConfig() ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.disk"></a>

```go
func Disk() ComputeRegionInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList">ComputeRegionInstanceTemplateDiskList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```go
func GuestAccelerator() ComputeRegionInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList">ComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```go
func MetadataFingerprint() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterface"></a>

```go
func NetworkInterface() ComputeRegionInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList">ComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```go
func NetworkPerformanceConfig() ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```go
func ReservationAffinity() ComputeRegionInstanceTemplateReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference">ComputeRegionInstanceTemplateReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.scheduling"></a>

```go
func Scheduling() ComputeRegionInstanceTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference">ComputeRegionInstanceTemplateSchedulingOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccount"></a>

```go
func ServiceAccount() ComputeRegionInstanceTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference">ComputeRegionInstanceTemplateServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```go
func TagsFingerprint() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeouts"></a>

```go
func Timeouts() ComputeRegionInstanceTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference">ComputeRegionInstanceTemplateTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```go
func AdvancedMachineFeaturesInput() ComputeRegionInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForwardInput"></a>

```go
func CanIpForwardInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```go
func ConfidentialInstanceConfigInput() ComputeRegionInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.diskInput"></a>

```go
func DiskInput() interface{}
```

- *Type:* interface{}

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.guestAcceleratorInput"></a>

```go
func GuestAcceleratorInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceDescriptionInput`<sup>Optional</sup> <a name="InstanceDescriptionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescriptionInput"></a>

```go
func InstanceDescriptionInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScriptInput"></a>

```go
func MetadataStartupScriptInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.networkPerformanceConfigInput"></a>

```go
func NetworkPerformanceConfigInput() ComputeRegionInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() ComputeRegionInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.schedulingInput"></a>

```go
func SchedulingInput() ComputeRegionInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() ComputeRegionInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() ComputeRegionInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.canIpForward"></a>

```go
func CanIpForward() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceDescription`<sup>Required</sup> <a name="InstanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.instanceDescription"></a>

```go
func InstanceDescription() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```go
func MetadataStartupScript() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="ComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures {
	EnableNestedVirtualization: interface{},
	ThreadsPerCore: *f64,
	VisibleCoreCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```go
EnableNestedVirtualization interface{}
```

- *Type:* interface{}

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#enable_nested_virtualization ComputeRegionInstanceTemplate#enable_nested_virtualization}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```go
ThreadsPerCore *f64
```

- *Type:* *f64

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#threads_per_core ComputeRegionInstanceTemplate#threads_per_core}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```go
VisibleCoreCount *f64
```

- *Type:* *f64

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#visible_core_count ComputeRegionInstanceTemplate#visible_core_count}

---

### ComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="ComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig {
	EnableConfidentialCompute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | Defines whether the instance should have confidential compute enabled. |

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

Defines whether the instance should have confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#enable_confidential_compute ComputeRegionInstanceTemplate#enable_confidential_compute}

---

### ComputeRegionInstanceTemplateConfig <a name="ComputeRegionInstanceTemplateConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Disk: interface{},
	MachineType: *string,
	AdvancedMachineFeatures: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures,
	CanIpForward: interface{},
	ConfidentialInstanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig,
	Description: *string,
	GuestAccelerator: interface{},
	Id: *string,
	InstanceDescription: *string,
	Labels: *map[string]*string,
	Metadata: *map[string]*string,
	MetadataStartupScript: *string,
	MinCpuPlatform: *string,
	Name: *string,
	NamePrefix: *string,
	NetworkInterface: interface{},
	NetworkPerformanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig,
	Project: *string,
	Region: *string,
	ReservationAffinity: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity,
	ResourceManagerTags: *map[string]*string,
	ResourcePolicies: *[]*string,
	Scheduling: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling,
	ServiceAccount: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount,
	ShieldedInstanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.disk">Disk</a></code> | <code>interface{}</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.canIpForward">CanIpForward</a></code> | <code>interface{}</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>interface{}</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.instanceDescription">InstanceDescription</a></code> | <code>*string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.region">Region</a></code> | <code>*string</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.disk"></a>

```go
Disk interface{}
```

- *Type:* interface{}

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#disk ComputeRegionInstanceTemplate#disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#machine_type ComputeRegionInstanceTemplate#machine_type}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```go
AdvancedMachineFeatures ComputeRegionInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#advanced_machine_features ComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.canIpForward"></a>

```go
CanIpForward interface{}
```

- *Type:* interface{}

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#can_ip_forward ComputeRegionInstanceTemplate#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```go
ConfidentialInstanceConfig ComputeRegionInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#confidential_instance_config ComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#description ComputeRegionInstanceTemplate#description}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.guestAccelerator"></a>

```go
GuestAccelerator interface{}
```

- *Type:* interface{}

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#guest_accelerator ComputeRegionInstanceTemplate#guest_accelerator}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceDescription`<sup>Optional</sup> <a name="InstanceDescription" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.instanceDescription"></a>

```go
InstanceDescription *string
```

- *Type:* *string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#instance_description ComputeRegionInstanceTemplate#instance_description}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to instances created from this template, 				 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.

Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#metadata ComputeRegionInstanceTemplate#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.metadataStartupScript"></a>

```go
MetadataStartupScript *string
```

- *Type:* *string

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#metadata_startup_script ComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#min_cpu_platform ComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#name ComputeRegionInstanceTemplate#name}

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#name_prefix ComputeRegionInstanceTemplate#name_prefix}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network_interface ComputeRegionInstanceTemplate#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```go
NetworkPerformanceConfig ComputeRegionInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network_performance_config ComputeRegionInstanceTemplate#network_performance_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#project ComputeRegionInstanceTemplate#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#region ComputeRegionInstanceTemplate#region}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.reservationAffinity"></a>

```go
ReservationAffinity ComputeRegionInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#reservation_affinity ComputeRegionInstanceTemplate#reservation_affinity}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.scheduling"></a>

```go
Scheduling ComputeRegionInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#scheduling ComputeRegionInstanceTemplate#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.serviceAccount"></a>

```go
ServiceAccount ComputeRegionInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#service_account ComputeRegionInstanceTemplate#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig ComputeRegionInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#shielded_instance_config ComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#tags ComputeRegionInstanceTemplate#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionInstanceTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts">ComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#timeouts ComputeRegionInstanceTemplate#timeouts}

---

### ComputeRegionInstanceTemplateDisk <a name="ComputeRegionInstanceTemplateDisk" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateDisk {
	AutoDelete: interface{},
	Boot: interface{},
	DeviceName: *string,
	DiskEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey,
	DiskName: *string,
	DiskSizeGb: *f64,
	DiskType: *string,
	Interface: *string,
	Labels: *map[string]*string,
	Mode: *string,
	ProvisionedIops: *f64,
	ResourceManagerTags: *map[string]*string,
	ResourcePolicies: *[]*string,
	Source: *string,
	SourceImage: *string,
	SourceImageEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey,
	SourceSnapshot: *string,
	SourceSnapshotEncryptionKey: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.boot">Boot</a></code> | <code>interface{}</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskName">DiskName</a></code> | <code>*string</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskType">DiskType</a></code> | <code>*string</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.interface">Interface</a></code> | <code>*string</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.mode">Mode</a></code> | <code>*string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.source">Source</a></code> | <code>*string</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImage">SourceImage</a></code> | <code>*string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.type">Type</a></code> | <code>*string</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.autoDelete"></a>

```go
AutoDelete interface{}
```

- *Type:* interface{}

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#auto_delete ComputeRegionInstanceTemplate#auto_delete}

---

##### `Boot`<sup>Optional</sup> <a name="Boot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.boot"></a>

```go
Boot interface{}
```

- *Type:* interface{}

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#boot ComputeRegionInstanceTemplate#boot}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#device_name ComputeRegionInstanceTemplate#device_name}

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskEncryptionKey"></a>

```go
DiskEncryptionKey ComputeRegionInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#disk_encryption_key ComputeRegionInstanceTemplate#disk_encryption_key}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskName"></a>

```go
DiskName *string
```

- *Type:* *string

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#disk_name ComputeRegionInstanceTemplate#disk_name}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#disk_size_gb ComputeRegionInstanceTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#disk_type ComputeRegionInstanceTemplate#disk_type}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#interface ComputeRegionInstanceTemplate#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#mode ComputeRegionInstanceTemplate#mode}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.provisionedIops"></a>

```go
ProvisionedIops *f64
```

- *Type:* *f64

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#provisioned_iops ComputeRegionInstanceTemplate#provisioned_iops}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.resourcePolicies"></a>

```go
ResourcePolicies *[]*string
```

- *Type:* *[]*string

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#source ComputeRegionInstanceTemplate#source}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImage"></a>

```go
SourceImage *string
```

- *Type:* *string

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#source_image ComputeRegionInstanceTemplate#source_image}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```go
SourceImageEncryptionKey ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#source_image_encryption_key ComputeRegionInstanceTemplate#source_image_encryption_key}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#source_snapshot ComputeRegionInstanceTemplate#source_snapshot}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```go
SourceSnapshotEncryptionKey ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#source_snapshot_encryption_key ComputeRegionInstanceTemplate#source_snapshot_encryption_key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

### ComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="ComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey {
	KmsKeySelfLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

### ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}

---

### ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey {
	KmsKeySelfLink: *string,
	KmsKeyServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```go
KmsKeySelfLink *string
```

- *Type:* *string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}

---

### ComputeRegionInstanceTemplateGuestAccelerator <a name="ComputeRegionInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateGuestAccelerator {
	Count: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.count">Count</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.type">Type</a></code> | <code>*string</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#count ComputeRegionInstanceTemplate#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAccelerator.property.type"></a>

```go
Type *string
```

- *Type:* *string

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

### ComputeRegionInstanceTemplateNetworkInterface <a name="ComputeRegionInstanceTemplateNetworkInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateNetworkInterface {
	AccessConfig: interface{},
	AliasIpRange: interface{},
	InternalIpv6PrefixLength: *f64,
	Ipv6AccessConfig: interface{},
	Ipv6Address: *string,
	Network: *string,
	NetworkIp: *string,
	NicType: *string,
	QueueCount: *f64,
	StackType: *string,
	Subnetwork: *string,
	SubnetworkProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>interface{}</code> | access_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>interface{}</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>interface{}</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.network">Network</a></code> | <code>*string</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>*string</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.nicType">NicType</a></code> | <code>*string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.queueCount">QueueCount</a></code> | <code>*f64</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | The ID of the project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.accessConfig"></a>

```go
AccessConfig interface{}
```

- *Type:* interface{}

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#access_config ComputeRegionInstanceTemplate#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```go
AliasIpRange interface{}
```

- *Type:* interface{}

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#alias_ip_range ComputeRegionInstanceTemplate#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```go
InternalIpv6PrefixLength *f64
```

- *Type:* *f64

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#internal_ipv6_prefix_length ComputeRegionInstanceTemplate#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```go
Ipv6AccessConfig interface{}
```

- *Type:* interface{}

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#ipv6_access_config ComputeRegionInstanceTemplate#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#ipv6_address ComputeRegionInstanceTemplate#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network ComputeRegionInstanceTemplate#network}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.networkIp"></a>

```go
NetworkIp *string
```

- *Type:* *string

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network_ip ComputeRegionInstanceTemplate#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.nicType"></a>

```go
NicType *string
```

- *Type:* *string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#nic_type ComputeRegionInstanceTemplate#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.queueCount"></a>

```go
QueueCount *f64
```

- *Type:* *f64

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#queue_count ComputeRegionInstanceTemplate#queue_count}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#stack_type ComputeRegionInstanceTemplate#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#subnetwork ComputeRegionInstanceTemplate#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```go
SubnetworkProject *string
```

- *Type:* *string

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#subnetwork_project ComputeRegionInstanceTemplate#subnetwork_project}

---

### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig {
	NatIp: *string,
	NetworkTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>*string</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The networking tier used for configuring this instance template. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```go
NatIp *string
```

- *Type:* *string

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#nat_ip ComputeRegionInstanceTemplate#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}

---

### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange {
	IpCidrRange: *string,
	SubnetworkRangeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#ip_cidr_range ComputeRegionInstanceTemplate#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```go
SubnetworkRangeName *string
```

- *Type:* *string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#subnetwork_range_name ComputeRegionInstanceTemplate#subnetwork_range_name}

---

### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
	NetworkTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}

---

### ComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="ComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig {
	TotalEgressBandwidthTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```go
TotalEgressBandwidthTier *string
```

- *Type:* *string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#total_egress_bandwidth_tier ComputeRegionInstanceTemplate#total_egress_bandwidth_tier}

---

### ComputeRegionInstanceTemplateReservationAffinity <a name="ComputeRegionInstanceTemplateReservationAffinity" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateReservationAffinity {
	Type: *string,
	SpecificReservation: github.com/cdktf/cdktf-provider-google-go/google/v13.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.type">Type</a></code> | <code>*string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity.property.specificReservation"></a>

```go
SpecificReservation ComputeRegionInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#specific_reservation ComputeRegionInstanceTemplate#specific_reservation}

---

### ComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="ComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}

---

### ComputeRegionInstanceTemplateScheduling <a name="ComputeRegionInstanceTemplateScheduling" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateScheduling {
	AutomaticRestart: interface{},
	InstanceTerminationAction: *string,
	LocalSsdRecoveryTimeout: interface{},
	MinNodeCpus: *f64,
	NodeAffinities: interface{},
	OnHostMaintenance: *string,
	Preemptible: interface{},
	ProvisioningModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code>interface{}</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>interface{}</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.automaticRestart"></a>

```go
AutomaticRestart interface{}
```

- *Type:* interface{}

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#automatic_restart ComputeRegionInstanceTemplate#automatic_restart}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```go
InstanceTerminationAction *string
```

- *Type:* *string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#instance_termination_action ComputeRegionInstanceTemplate#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```go
LocalSsdRecoveryTimeout interface{}
```

- *Type:* interface{}

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#local_ssd_recovery_timeout ComputeRegionInstanceTemplate#local_ssd_recovery_timeout}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.minNodeCpus"></a>

```go
MinNodeCpus *f64
```

- *Type:* *f64

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#min_node_cpus ComputeRegionInstanceTemplate#min_node_cpus}

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.nodeAffinities"></a>

```go
NodeAffinities interface{}
```

- *Type:* interface{}

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#node_affinities ComputeRegionInstanceTemplate#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.onHostMaintenance"></a>

```go
OnHostMaintenance *string
```

- *Type:* *string

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#on_host_maintenance ComputeRegionInstanceTemplate#on_host_maintenance}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.preemptible"></a>

```go
Preemptible interface{}
```

- *Type:* interface{}

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#preemptible ComputeRegionInstanceTemplate#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling.property.provisioningModel"></a>

```go
ProvisioningModel *string
```

- *Type:* *string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#provisioning_model ComputeRegionInstanceTemplate#provisioning_model}

---

### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#seconds ComputeRegionInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#nanos ComputeRegionInstanceTemplate#nanos}

---

### ComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#operator ComputeRegionInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#operator ComputeRegionInstanceTemplate#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}.

---

### ComputeRegionInstanceTemplateServiceAccount <a name="ComputeRegionInstanceTemplateServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateServiceAccount {
	Scopes: *[]*string,
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.scopes">Scopes</a></code> | <code>*[]*string</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.email">Email</a></code> | <code>*string</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#scopes ComputeRegionInstanceTemplate#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount.property.email"></a>

```go
Email *string
```

- *Type:* *string

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#email ComputeRegionInstanceTemplate#email}

---

### ComputeRegionInstanceTemplateShieldedInstanceConfig <a name="ComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig {
	EnableIntegrityMonitoring: interface{},
	EnableSecureBoot: interface{},
	EnableVtpm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```go
EnableIntegrityMonitoring interface{}
```

- *Type:* interface{}

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#enable_integrity_monitoring ComputeRegionInstanceTemplate#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#enable_secure_boot ComputeRegionInstanceTemplate#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```go
EnableVtpm interface{}
```

- *Type:* interface{}

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#enable_vtpm ComputeRegionInstanceTemplate#enable_vtpm}

---

### ComputeRegionInstanceTemplateTimeouts <a name="ComputeRegionInstanceTemplateTimeouts" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

&computeregioninstancetemplate.ComputeRegionInstanceTemplateTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#create ComputeRegionInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#delete ComputeRegionInstanceTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#create ComputeRegionInstanceTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_region_instance_template#delete ComputeRegionInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```go
func ResetEnableNestedVirtualization()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```go
func ResetThreadsPerCore()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```go
func ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```go
func EnableNestedVirtualizationInput() interface{}
```

- *Type:* interface{}

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```go
func ThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```go
func VisibleCoreCountInput() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() interface{}
```

- *Type:* interface{}

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```go
func VisibleCoreCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateAdvancedMachineFeatures">ComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateConfidentialInstanceConfig">ComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### ComputeRegionInstanceTemplateDiskList <a name="ComputeRegionInstanceTemplateDiskList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateDiskOutputReference <a name="ComputeRegionInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetBoot">ResetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```go
func PutDiskEncryptionKey(value ComputeRegionInstanceTemplateDiskDiskEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```go
func PutSourceImageEncryptionKey(value ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```go
func PutSourceSnapshotEncryptionKey(value ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```go
func ResetAutoDelete()
```

##### `ResetBoot` <a name="ResetBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetBoot"></a>

```go
func ResetBoot()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```go
func ResetDiskEncryptionKey()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskName"></a>

```go
func ResetDiskName()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetInterface"></a>

```go
func ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```go
func ResetProvisionedIops()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```go
func ResetResourcePolicies()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```go
func ResetSourceImage()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```go
func ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```go
func ResetSourceSnapshotEncryptionKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.bootInput">BootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput">SourceImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.boot">Boot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskName">DiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">SourceImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```go
func SourceImageEncryptionKey() ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```go
func SourceSnapshotEncryptionKey() ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```go
func AutoDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `BootInput`<sup>Optional</sup> <a name="BootInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.bootInput"></a>

```go
func BootInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```go
func DiskEncryptionKeyInput() ComputeRegionInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskDiskEncryptionKey">ComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```go
func DiskNameInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```go
func ProvisionedIopsInput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```go
func ResourcePoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```go
func SourceImageEncryptionKeyInput() ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```go
func SourceImageInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```go
func SourceSnapshotEncryptionKeyInput() ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```go
func AutoDelete() interface{}
```

- *Type:* interface{}

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```go
func Boot() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```go
func DiskName() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```go
func ProvisionedIops() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```go
func SourceImage() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```go
func ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```go
func KmsKeySelfLinkInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### ComputeRegionInstanceTemplateGuestAcceleratorList <a name="ComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateGuestAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateGuestAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="ComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateGuestAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateGuestAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```go
func ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```go
func NatIpInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```go
func NatIp() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```go
func ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```go
func SubnetworkRangeNameInput() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```go
func SubnetworkRangeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```go
func ExternalIpv6() *string
```

- *Type:* *string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```go
func ExternalIpv6PrefixLength() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceList <a name="ComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="ComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```go
func PutAliasIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```go
func PutIpv6AccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```go
func ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```go
func ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```go
func ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```go
func ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```go
func ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```go
func ResetQueueCount()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```go
func ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```go
func AccessConfig() ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```go
func AliasIpRange() ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```go
func Ipv6AccessConfig() ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```go
func Ipv6AccessType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```go
func AliasIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```go
func InternalIpv6PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```go
func Ipv6AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```go
func NetworkIpInput() *string
```

- *Type:* *string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```go
func NicTypeInput() *string
```

- *Type:* *string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```go
func QueueCountInput() *f64
```

- *Type:* *f64

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```go
func SubnetworkProjectInput() *string
```

- *Type:* *string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```go
func InternalIpv6PrefixLength() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```go
func NetworkIp() *string
```

- *Type:* *string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```go
func NicType() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```go
func SubnetworkProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```go
func TotalEgressBandwidthTierInput() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```go
func TotalEgressBandwidthTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateNetworkPerformanceConfig">ComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### ComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="ComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```go
func PutSpecificReservation(value ComputeRegionInstanceTemplateReservationAffinitySpecificReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```go
func ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```go
func SpecificReservation() ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```go
func SpecificReservationInput() ComputeRegionInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinity">ComputeRegionInstanceTemplateReservationAffinity</a>

---


### ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateReservationAffinitySpecificReservation">ComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceTemplateSchedulingOutputReference <a name="ComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```go
func PutLocalSsdRecoveryTimeout(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```go
func PutNodeAffinities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```go
func ResetAutomaticRestart()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```go
func ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```go
func ResetLocalSsdRecoveryTimeout()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```go
func ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```go
func ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```go
func ResetOnHostMaintenance()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```go
func ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```go
func ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```go
func LocalSsdRecoveryTimeout() ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```go
func NodeAffinities() ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```go
func AutomaticRestartInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```go
func InstanceTerminationActionInput() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```go
func LocalSsdRecoveryTimeoutInput() interface{}
```

- *Type:* interface{}

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```go
func MinNodeCpusInput() *f64
```

- *Type:* *f64

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```go
func NodeAffinitiesInput() interface{}
```

- *Type:* interface{}

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```go
func OnHostMaintenanceInput() *string
```

- *Type:* *string

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```go
func PreemptibleInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```go
func ProvisioningModelInput() *string
```

- *Type:* *string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```go
func AutomaticRestart() interface{}
```

- *Type:* interface{}

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```go
func InstanceTerminationAction() *string
```

- *Type:* *string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```go
func MinNodeCpus() *f64
```

- *Type:* *f64

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```go
func OnHostMaintenance() *string
```

- *Type:* *string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```go
func Preemptible() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```go
func ProvisioningModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateScheduling">ComputeRegionInstanceTemplateScheduling</a>

---


### ComputeRegionInstanceTemplateServiceAccountOutputReference <a name="ComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```go
func ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateServiceAccount">ComputeRegionInstanceTemplateServiceAccount</a>

---


### ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```go
func ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```go
func ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```go
func EnableIntegrityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```go
func EnableVtpmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateShieldedInstanceConfig">ComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---


### ComputeRegionInstanceTemplateTimeoutsOutputReference <a name="ComputeRegionInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeregioninstancetemplate"

computeregioninstancetemplate.NewComputeRegionInstanceTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceTemplate.ComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



